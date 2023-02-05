import { Injectable } from '@angular/core';
import {collection, getFirestore, orderBy, query, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import {Firebase} from '../../dig';
import {AuthService} from '../../user/services/auth.service';
import {ContentNodeService} from '../../page/services/content-node.service';
import {PAGE_COLLECTION} from '../../page/services/page.service';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {collectionData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';
import {Page} from '../../page/interfaces/page';
import {Media} from '../interfaces/media';
import {DocumentData} from 'rxfire/firestore/interfaces';

const MEDIA_COLLECTION = 'media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private storage = getStorage(this.firebase)
  private db = getFirestore(this.firebase);

  private user: any;

  constructor(private firebase: Firebase, private auth: AuthService, private contentNodeService: ContentNodeService) {
    this.auth.user().subscribe((u: any) => this.user = u);
  }

  getUploads() {
    const nodeRef = query(
      collection(this.db, MEDIA_COLLECTION),
      orderBy('timeCreated')
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map((uploads: DocumentData[]) => uploads ? uploads.map((f: DocumentData) => f as Media) : [])
    );
  }

  async getUrl(file: Media) {
    if (! file?.name) {
      return '';
    }
    return getDownloadURL(ref(this.storage, file.name));
  }

  saveMedia(media: any) {
    const mediaDoc = doc(this.db, 'media', media.id + '');
    return updateDoc(mediaDoc, {...media});
  }

  deleteMedia(id: string) {
    const mediaDoc = doc(this.db, 'media', id);
    return deleteDoc(mediaDoc);
  }

  private async getUploadsFromStorage() {
    const listRef = ref(this.storage, 'uploads');
    const uploads = await listAll(listRef);
    return Promise.all(uploads.items.map(item => {
      return getDownloadURL(ref(this.storage, item.fullPath)).then(url => ({
        url,
        name: item.name,
        path: item.fullPath
      }))
    }))
  }
}
