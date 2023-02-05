import { Injectable } from '@angular/core';
import {addDoc, collection, doc, getFirestore, orderBy, query, setDoc, where, writeBatch, deleteDoc} from 'firebase/firestore';
import {collectionData, docData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';
import {firstValueFrom, Observable} from 'rxjs';
import {Firebase} from '../../dig';
import {AuthService} from '../../user/services/auth.service';
import {v4 as uuid} from 'uuid';
import {ContentNode, NewContentNode} from '../interfaces/content-node';

const CONTENT_NODE_COLLECTION = 'content-nodes';

@Injectable({
  providedIn: 'root'
})
export class ContentNodeService {
  private db = getFirestore(this.firebase);
  private nodeCollection = collection(this.db, CONTENT_NODE_COLLECTION);

  private user: any;
  constructor(private firebase: Firebase, private auth: AuthService) {
    this.auth.user().subscribe((u: any) => this.user = u);
  }

  getPageNodes(pageId: string | undefined) {
    const nodeRef = query(
      this.nodeCollection,
      where('pageId', '==', pageId),
      orderBy('position')
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map(nodes => nodes ? nodes.map(n => n as ContentNode) : [])
    );
  }


  getNodesByScope(scope: string) {
    const nodeRef = query(
      this.nodeCollection,
      where('scope', '==', scope),
      orderBy('name')
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map(nodes => nodes ? nodes.map(n => n as ContentNode) : [])
    );
  }

  setPageNodes(pageId: string, nodes: ContentNode[]) {
    // todo add option to remove all before you set these
    const batch = writeBatch(this.db);
    nodes.forEach((n: ContentNode) => {
      const metadata = {
          ...n.metadata,
          lastModified: new Date(),
          lastModifiedBy: this.user
      }
      if (! n.id) {
        metadata.createdAt = new Date();
        metadata.createdBy = this.user;
      }
      const data = {
        ...n,
        id: n.id ? n.id : uuid(),
        metadata
      };

      const docRef = doc(this.db, CONTENT_NODE_COLLECTION, data.id);
      batch.set(docRef, data);
    })
    return batch.commit();
  }

  async duplicatePage(pageId: string, newPageId: string) {
    const nodes = await firstValueFrom(this.getPageNodes(pageId));
    return await this.setPageNodes(newPageId, nodes.map(node => ({
      ...node,
      pageId: newPageId,
      id: ''
    })));
  }

  getNode(id: string): Observable<ContentNode> {
    return docData(doc(this.db, CONTENT_NODE_COLLECTION, id)).pipe(
      map(node => ({
        ...node,
        id
      } as ContentNode))
    );
  }

  createNode(data: NewContentNode) {
    const node = {
      ...data,
      metadata: {
        ...data.metadata,
        createdAt: new Date(),
        createdBy: this.user,
        lastModified: new Date(),
        lastModifiedBy: this.user
      }
    }
    return addDoc(this.nodeCollection, node).then(res => ({...node, id: res.id}))
  }

  updateNode(data: ContentNode) {
    const node = {
      ...data,
      metadata: {
        ...data.metadata,
        lastModified: new Date(),
        lastModifiedBy: this.user
      }
    }
    return setDoc(doc(this.db, CONTENT_NODE_COLLECTION, node.id), node).then(res => node);
  }

  sortNodes(nodes: ContentNode[]) {
    const batch = writeBatch(this.db);
    nodes.forEach((n: ContentNode, position: number) => {
      const docRef = doc(this.db, CONTENT_NODE_COLLECTION, n.id + '');
      batch.update(docRef, {position});
    })
    return batch.commit();
  }

  delete(nodeId: string) {
    return deleteDoc(doc(this.db, CONTENT_NODE_COLLECTION, nodeId));
  }

  async deletePage(pageId: string) {
    const nodes = await firstValueFrom(this.getPageNodes(pageId));
    const batch = writeBatch(this.db);
    nodes.forEach((n: ContentNode) => {
      const docRef = doc(this.db, CONTENT_NODE_COLLECTION, n.id);
      batch.delete(docRef);
    })
    return batch.commit();
  }
}
