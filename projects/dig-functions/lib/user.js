// auth triggers
const functions = require("firebase-functions");
const {getFirestore} = require("firebase-admin/firestore");
const db = getFirestore();
const {getAuth} = require("firebase-admin/auth");

exports.createUserProfile = functions.auth.user().onCreate((user) => {
  const {uid, email, photoURL, displayName} = user
  return db.collection("user-profiles").doc(user.uid).set({
    uid,
    email,
    photoURL,
    displayName,
    createdAt: new Date(),
    role: 'guest',
  });
});

exports.hasOwner = functions.https.onCall(async (data, context) => {
  const owner = await getOwner();
  return owner.docs?.length > 0;
});

exports.createOwner = functions.https.onCall(async (data, context) => {
  const owner = await getOwner();
  if (owner.empty) {
    const uid = context.auth.uid;
    return setUserRole(uid, 'owner')
  } else {
    throw new Error('Owner already exists');
  }
});

exports.setUserClaims = functions.firestore
  .document('user-roles/{uid}')
  .onWrite((change, context) => {
    const data = change.after.data();
    const {uid} = context.params;
    return getAuth()
      .setCustomUserClaims(uid, { role: data.role });
  });

const getOwner = () => db
  .collection("user-roles")
  .where("role", "==", "owner")
  .get()

const setUserRole = (uid, role) => {
  db.collection("user-roles").doc(uid).set({
    role
  }, {merge: true}).then(res => !! res)
}

// todo handle delete user
