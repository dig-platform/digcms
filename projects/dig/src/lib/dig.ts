import {FirebaseOptions, initializeApp, FirebaseApp} from 'firebase/app';
import {config} from 'rxjs';
import {Shortcut} from './ui/interfaces/shortcut';

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
  editor?: {
    title?: string;
    shortcuts?: Shortcut[];
  }
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

  constructor(readonly config: DigConfig) {
  }
}

export const provideDig = (config: DigConfig) => (
  {
    provide: Dig,
    useFactory: () => new Dig(config)
  }
);

