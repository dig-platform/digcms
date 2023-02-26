# Digitalus CMS Installation

## Requirements

You will need to install the latest versions of Angular CLI to follow this tutorial:

```shell
npm install -g @angular/cli
```
## Installation

### Create a new Angular app

```shell
ng new my-site
```

### Install Digitalus CMS

```shell
cd ./my-site
npm install @dig-platform/dig @dig-platform/dig-functions
```

### Install Angular Material UI

```shell
ng add @angular/material
```

* select whatever theme you want
* we usually include typography, but it's not required
* include the Angular Animations module

### Install NGRX

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
        EffectsModule.forRoot([])
    // ...
    ]
})
```

> Note that for some reason the @ngrx/store module is automatically imported into to the app module,
> but the effects are not

### Create your Firebase project

See the [platform](./platform.md) page for step-by-step instructions to create and configure your platform.
When you are done creating and deploying your platform copy the configuration object for the next step.

> You can find your configuration object at https://console.firebase.google.com/project/my-project/settings/general

### Configure DigitalusCMS

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
          editor: {
            title: 'My New Site'
          },
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

### Connect the app

Add the DigCMS route to your app

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

