# Firebase Setup

# Digcms

## Requirements

You will need to install the latest versions of Angular CLI and Firebase Tools:

```shell
npm install -g @angular/cli
npm install -g firebase-tools
```
## Installation

### Create a new Firebase project

1. Go to https://console.firebase.google.com/
2. Create a new project
3. Enable Firestore Database
4. Enable Cloud Storage
5. Enable Authentication with the Google Auth Provider
6. Create a new web app
7. Copy the Firebase configuration settings

> note that you must upgrade Firebase to the `Blaze` pay as you go plan
> to enable the required functions

### Connect your app to firebase

You will need to install the latest versions of Firebase Tools:

```shell
npm install -g firebase-tools
cd path/to/project
firebase init
```

1. enable Firestore
2. enable Storage
3. enable Functions
4. optionally enable Hosting (we always do)
5. select `Use an existing project` then your new Firebase project
6. select Firebase's default options unless you want to customize the build
7. select Javascript as the functions language (TS coming soon)
8. set your public directory to `dist/my-site`
9. set `Configure as a single-page app` to `y`

Next add DigFunctions to your Firebase Functions:

```javascript
// functions/index.js

const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.dig = require("@dig-platform/dig-functions");
```

> note that you must upgrade Firebase to the `Blaze` pay as you go plan
> to enable the required functions

### Security and Permissions
