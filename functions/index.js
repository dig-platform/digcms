const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.dig = require("@dig-platform/dig-functions");
