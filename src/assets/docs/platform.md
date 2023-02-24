# Firebase Setup

## Requirements

You will need to install the latest versions of Angular CLI and Firebase Tools:

```shell
npm install -g firebase-tools
```

## Create a new Firebase project

> You can use an existing project as long as all of the required resources are enabled

1. Go to https://console.firebase.google.com/
2. Create a new project
3. Enable Firestore Database
4. Enable Cloud Storage
5. Enable Authentication with the Google Auth Provider
6. Create a new web app
7. Copy the Firebase configuration settings

> note that you must upgrade Firebase to the `Blaze` pay as you go plan
> to enable the required functions

## Connect your app to firebase

First you need to install the latest versions of Firebase Tools:

```shell
npm install -g firebase-tools
cd path/to/project
firebase init
```

You will be prompted to select the features to add. Digitalus requires the following features:

* Firestore
* Functions
* Storage
* Hosting (optional, but we use it for all of our sites)

Hit enter after you select these features.

> Note that you will need to sign in the first time you use Firebase Tools

### Set the default project

1. Select `Use an existing project`
2. Select the project you created in the first step

### Firestore Database

1. Accept the default file for Firestore Rules
2. Accept the default file for Firestore indexes

### Functions Setup

1. Select JavaScript as the functions language
2. Enable ESLint if you want
3. Install the dependencies

> We are currently working on the TypeScript version of our functions
> but there are some weird Node version issues that need to be addressed first

### Hosting (optional)

1. Set your public directory to `dist/my-project`
2. Configure as a single-page app
3. Optionally setup automatic builds with GitHub (we always do)
   1. Sign in to GitHub if you chose automatic builds
   2. Set the user/repo
   3. Set up workflow to run build script after deploy
   4. Accept the default script to run (this will run Angular's build)
   5. Optionally setup automatic deployments when a PR is merged
   6. Select your site's live channel (usually `master` or `main`)

### Cloud Storage

1. Select the default file for Storage Rules

### Configuring your Firebase project

Once your Firebase project is initialized you need to secure your database and storage.

Add the following rules to your `firestore.rules.json` file:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isOwner() {
      return request.auth.token.role == 'owner';
    }
    function isAdmin() {
      // an owner can assume the admin role
      return isOwner() || request.auth.token.role == 'admin';
    }
    function isEditor() {
      // an owner or admin can assume the editor role
      return isOwner() || isAdmin() || request.auth.token.role == 'editor';
    }
    match /{document=**} {
      match /user-roles/{uid} {
        allow read: if isAdmin();
        allow write: if isOwner();
      }
      allow read: if true;
      allow write: if isEditor();
    }
  }
}
```

Add the following indexes to `firestore.indexes.json`:

```
{
  "indexes": [
    {
      "collectionGroup": "content-nodes",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "pageId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "position",
          "order": "ASCENDING"
        }
      ]
    },
    {
      "collectionGroup": "content-nodes",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "scope",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "name",
          "order": "ASCENDING"
        }
      ]
    }
  ],
  "fieldOverrides": []
}
```

Add the following rules to `storage.rules.json`:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    function isOwner() {
      return request.auth.token.role == 'owner';
    }
    function isAdmin() {
      // an owner can assume the admin role
      return isOwner() || request.auth.token.role == 'admin';
    }
    function isEditor() {
      // an owner or admin can assume the editor role
      return isOwner() || isAdmin() || request.auth.token.role == 'editor';
    }
    match /{allPaths=**} {
        allow read: if true;
        allow write: if isEditor();
    }
  }
}
```

## Deploying your project to Firebase

Once you set up your project you need to deploy it to firebase to enable the settings there.

```shell
firebase deploy
```
