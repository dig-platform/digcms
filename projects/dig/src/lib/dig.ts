import {FirebaseOptions, initializeApp, FirebaseApp} from 'firebase/app';
import {config} from 'rxjs';

export class Firebase implements FirebaseApp{
  automaticDataCollectionEnabled!: boolean;
  readonly name!: string;
  readonly options!: FirebaseOptions;
}

export const provideFirebase = (config: FirebaseOptions) => (
  {provide: Firebase, useFactory: () => {
      initializeApp(config);
    }}
);

export interface DigConfig {
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL?: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  }
}

export class Dig {
  firebase!: Firebase;

  constructor(private config: DigConfig) {
  }
}

export const provideDig = (config: DigConfig) => (
  {
    provide: Dig,
    useFactory: () => new Dig(config)
  }
);

