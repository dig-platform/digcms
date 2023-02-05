import { Injectable } from '@angular/core';
import {Firebase} from '../../dig';
import {authState, idToken} from 'rxfire/auth';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {concatMap, map, mergeMap, switchMap} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import { getFunctions, httpsCallable, HttpsCallable } from "firebase/functions";

export interface Auth {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly roles = [
    'guest',
    'writer',
    'editor',
    'admin',
    'owner'
  ]
  constructor(private firebase: Firebase
  ) {}

  mapAuthInstance(user: any): Auth | undefined {
    return user ? ({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL
    }) : undefined;
  }

  user(): Observable<Auth | undefined> {
    return authState(getAuth(this.firebase)).pipe(
      map(this.mapAuthInstance)
    );
  }

  role() {
    return authState(getAuth(this.firebase)).pipe(
      concatMap(user => {
        if (user) {
          return from(user.getIdTokenResult().then(token => {
            const {claims} = token;
            return claims['role'] ? claims['role'] : 'guest';
          }))
        } else {
          return of(undefined);
        }
      })
    );
  }

  hasRole(role: string) {
    return this.role().pipe(
      map(userRole => {
        const roleIndex = this.roles.findIndex(r => r === role);
        const userRoleIndex = this.roles.findIndex(r => r === userRole);
        return userRoleIndex >= roleIndex;
      })
    )
  }

  googleSignIn() {
    return from(
      signInWithPopup(
        getAuth(this.firebase), new GoogleAuthProvider()
      ).then(res => this.mapAuthInstance(res.user))
    );
  }

  signOut() {
    return from(getAuth(this.firebase).signOut());
  }

  async becomeOwner() {
    const functions = getFunctions();
    const fn = httpsCallable(functions, 'dig-user-createOwner');
    const res = await fn();
  }
}
