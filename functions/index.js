/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const { join } = require("path");
const admin = require("firebase-admin");
const next = require("next");

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";

// Initialize Next.js app
const app = next({
  dev,
  conf: {
    distDir: join("..", ".next"),
  },
});

const handle = app.getRequestHandler();

// Serve Next.js app from Firebase Functions
exports.nextServer = functions.https.onRequest(async (req, res) => {
  console.log("File: " + req.originalUrl);

  await app.prepare();
  return handle(req, res);
});
