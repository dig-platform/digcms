import {FirebaseOptions, initializeApp, FirebaseApp} from 'firebase/app';

export class Firebase implements FirebaseApp{
  automaticDataCollectionEnabled!: boolean;
  readonly name!: string;
  readonly options!: FirebaseOptions;
}

export const provideFirebase = (config: FirebaseOptions) => (
  {provide: Firebase, useFactory: () => initializeApp(config)}
);

