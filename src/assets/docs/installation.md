# Digitalus CMS Installation

## Requirements

You will need to install the latest versions of Angular CLI to follow this tutorial:

```shell
npm install -g @angular/cli
```
## Installation

### 1. Create a new Firebase project

1. Go to https://console.firebase.google.com/
2. Create a new project
3. Enable Firestore Database
4. Enable Cloud Storage
5. Enable Authentication with the Google Auth Provider
6. Create a new web app
7. Copy the Firebase configuration settings



### 2. Create a new Angular app

```shell
ng new my-site
```

### 3. Install Digitalus CMS

```shell
cd ./my-site
npm install @dig-platform/dig @dig-platform/dig-functions
```

### 4. Install Angular Material UI

```shell
ng add @angular/material
```

* select whatever theme you want
* we usually include typography, but it's not required
* include the Angular Animations module

### 5. Install Firebase

Digitalus CMS runs on Google Cloud & Google's platform as a service, Firebase.

[Setup Firebase Project](./platform.md)

### 6. Install NGRX

First install the packages

```shell
ng add @ngrx/store @ngrx/effects @ngrx/store-devtools
```

Then add the root store to your module

```typescript
// src/app/app.module.ts

// ...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
// ...
```

> Note that for some reason the @ngrx/store module is automatically imported into to the app module,
> but the effects are not

### 7.Configure DigitalusCMS

Go to your Firebase console in the browser, then copy the configuration for your web app.
Then add the DigModule to your app module with the configuration

```typescript
// src/app/app.module.ts

// ...
@NgModule({
    // ...
    imports: [
        // ...
        DigModule.forRoot({
          title: 'My New Site',
          firebase: {
              apiKey: "...",
              authDomain: "...",
              projectId: "...",
              storageBucket: "...",
              messagingSenderId: "...",
              appId: "...",
              measurementId: "..."
          }
        })
        // ...
    ]
})
```





Then add the route to your app

```typescript
// src/app/app-routing.module.ts

const routes: Routes = [
  {
    path: 'dig-cms',
    loadChildren: () => import('@dig-platform/dig').then(d => d.DigCmsModule)
  },
  // more routes
];
```

And finally replace the boilerplate app page with the router outlet:

```html
<!-- src/app/app.component.html -->
<router-outlet></router-outlet>
```

