import { Injectable } from '@angular/core';
import {addDoc, collection, deleteDoc, doc, getFirestore, orderBy, query, setDoc, where} from 'firebase/firestore';
import {Firebase} from '../../dig';
import {AuthService} from '../../user/services/auth.service';
import {ContentNodeService} from '../../page/services/content-node.service';
import {collectionData, docData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';
import {NewPost, Post, POST_DRAFT} from '../interfaces/blog';
import {Observable} from 'rxjs';
import {Media} from '../../media/interfaces/media';
import {DocumentData} from 'rxfire/firestore/interfaces';

export const POST_COLLECTION = 'blog-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private db = getFirestore(this.firebase);
  private postCollection = collection(this.db, POST_COLLECTION);

  private user: any;

  constructor(private firebase: Firebase, private auth: AuthService, private contentNodeService: ContentNodeService) {
    this.auth.user().subscribe((u: any) => this.user = u);
  }



  getPost(id: string) {
    return docData(doc(this.db, POST_COLLECTION, id)).pipe(
      map(post => ({
        ...post,
        id
      } as Post))
    );
  }

  getPosts(): Observable<Post[]> {
    const nodeRef = query(
      collection(this.db, POST_COLLECTION),
      orderBy('title')
    );

    return collectionData(nodeRef, { idField: 'id' }).pipe(
      map(posts => posts ? posts.map((p: DocumentData) => p as Post) : [])
    );
  }

  async createPost(data: NewPost): Promise<Post> {
    const post = {
      intro: '',
      body: '',
      tags: [],
      media: null,
      ...data,
      status: POST_DRAFT,
      metadata: {
        createdAt: new Date(),
        createdBy: this.user,
        updatedAt: new Date(),
        updatedBy: this.user
      }
    };
    return addDoc(this.postCollection, post).then(res => ({...post, id: res.id} as Post))
  }

  async updatePost(data: Post): Promise<Post> {
    const post = {
      ...data,
      metadata: {
        ...data.metadata,
        updatedAt: new Date(),
        updatedBy: this.user
      }
    }
    return setDoc(doc(this.db, POST_COLLECTION, post.id), post).then(res => post as Post);
  }

  async setPost(post: Post) {
    if (post.id) {
      return this.updatePost(post);
    }
    return this.createPost(post);
  }

  async duplicatePost(name: string | null | undefined, template: Post) {
    // todo duplicate post
    const data = {
      ...template,
      name
    } as any;
    delete data.id;
    data.name = name;
    const post = await this.createPost(data as NewPost);
    return post;
  }

  delete(postId: string) {
    return deleteDoc(doc(this.db, POST_COLLECTION, postId))
  }
}
