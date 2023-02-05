import { Injectable } from '@angular/core';
import {Settings} from '../interfaces/settings';
import {from, Observable} from 'rxjs';
import {Firebase} from '../../dig';
import {collection, doc, getFirestore, setDoc} from 'firebase/firestore';
import {docData} from 'rxfire/firestore';
import {map} from 'rxjs/operators';

const DATA_COLLECTION = 'siteData';
const SETTINGS_DOC = 'settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private db = getFirestore(this.firebase);
  private settingsDoc = doc(this.db, DATA_COLLECTION, SETTINGS_DOC);

  constructor(private firebase: Firebase) {
  }

  setSettings(settings: Settings) {
    return from(setDoc(this.settingsDoc, settings));
  }

  getSettings(): Observable<Settings> {
    return docData(this.settingsDoc).pipe(
      map(data => ({...data} as Settings))
    );
  }
}
