import { Injectable } from '@angular/core';
import {addDoc, collection, deleteDoc, doc, getFirestore, orderBy, query, setDoc, where} from 'firebase/firestore';
import {collectionData, docData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Firebase} from '../../dig';
import {AuthService} from '../../user/services/auth.service';
import {NewPage, Page, PAGE_DRAFT} from '../interfaces/page';
import {ContentNodeService} from './content-node.service';



export const PAGE_COLLECTION = 'pages';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private db = getFirestore(this.firebase);
  private pageCollection = collection(this.db, PAGE_COLLECTION);

  private user: any;

  constructor(private firebase: Firebase, private auth: AuthService, private contentNodeService: ContentNodeService) {
    this.auth.user().subscribe((u: any) => this.user = u);
  }



  getPage(id: string) {
    return docData(doc(this.db, PAGE_COLLECTION, id)).pipe(
      map(page => ({
        ...page,
        id
      } as Page))
    );
  }

  getPageByPath(path: string): Observable<Page> {
    const nodeRef = query(
      collection(this.db, PAGE_COLLECTION),
      where('path', '==', path)
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map(pages => pages[0] as Page)
    );
  }

  getPages(): Observable<Page[]> {
    const nodeRef = query(
      collection(this.db, PAGE_COLLECTION),
      orderBy('name')
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map(pages => pages ? pages.map(p => p as Page) : [])
    );
  }

  async createPage(data: NewPage): Promise<Page> {
    const path = data.path ? data.path : data.name;
    const page = {
      ...data,
      path,
      status: PAGE_DRAFT,
      metadata: {
        ...data.metadata,
        createdAt: new Date(),
        createdBy: this.user,
        updatedAt: new Date(),
        updatedBy: this.user
      }
    };
    return addDoc(this.pageCollection, page).then(res => ({...page, id: res.id} as Page))
  }

  async updatePage(data: Page): Promise<Page> {
    const page = {
      ...data,
      metadata: {
        ...data.metadata,
        updatedAt: new Date(),
        updatedBy: this.user
      }
    }
    return setDoc(doc(this.db, PAGE_COLLECTION, page.id), page).then(res => page as Page);
  }

  async setPage(page: Page) {
    if (page.id) {
      return this.updatePage(page);
    }
    return this.createPage(page);
  }

  async duplicatePage(name: string | null | undefined, template: Page) {
    const data = {
      ...template,
      name
    } as any;
    delete data.id;
    data.name = name;
    const page = await this.createPage(data as NewPage);
    await this.contentNodeService.duplicatePage(template.id, page.id);
    return page;
  }

  delete(pageId: string) {
    return deleteDoc(doc(this.db, PAGE_COLLECTION, pageId))
  }
}
