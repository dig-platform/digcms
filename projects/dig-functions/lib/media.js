const {getFirestore} = require("firebase-admin/firestore");
const {getStorage} = require("firebase-admin/storage");
const functions = require("firebase-functions");

const db = getFirestore();
// const storage = getStorage();


// storage triggers
exports.createMediaRecord = functions.storage.object().onFinalize(async (object) => {
  const {id, name, mediaLink, size, timeCreated, metadata, contentType, bucket} = object;
  const docId = name
    .split('/')
    .map(segment => segment.replace(/[^0-9a-z\-\.]/gi, ''))
    .join('_');
  return db.collection("media").doc(docId).set({
    storageId: id,
    bucket,
    name,
    mediaLink,
    size,
    timeCreated,
    metadata,
    contentType
  }, {merge: true});
});

// todo clean up files after you delete an object
// exports.deleteMedia = functions.firestore
//   .document('media/{mediaId}')
//   .onDelete((snap, context) => {
//     const deletedMedia = snap.data();
//     const fileRef = ref(storage, deletedMedia.name);
//   });
