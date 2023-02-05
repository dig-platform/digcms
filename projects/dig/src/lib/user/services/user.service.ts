import { Injectable } from '@angular/core';
import {collection, getFirestore, orderBy, query} from 'firebase/firestore';
import {Firebase} from '../../dig';
import {AuthService} from './auth.service';
import {ContentNodeService} from '../../page/services/content-node.service';
import {collectionData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';
import {Media} from '../../media/interfaces/media';
import {User} from '../interfaces/user';

const USER_COLLECTION = 'user-profiles';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private db = getFirestore(this.firebase);

  private user: any;

  constructor(private firebase: Firebase, private auth: AuthService, private contentNodeService: ContentNodeService) {
    this.auth.user().subscribe((u: any) => this.user = u);
  }

  getUsers() {
    const nodeRef = query(
      collection(this.db, USER_COLLECTION),
      orderBy('createdAt')
    );

    return collectionData(nodeRef, { idField: 'uid' }).pipe(
      map(users => users ? users.map(f => f as User) : [])
    );
  }

  getUserRoles() {
    const nodeRef = query(
      collection(this.db, 'user-roles')
    );

    return collectionData(nodeRef, { idField: 'uid' }).pipe(
      map(users => users ? users.reduce((userMap: any, user: any) => {
        return {
          ...userMap,
          [user.uid]: user.role
        }
      }, {} as any) : {})
    );
  }
}
