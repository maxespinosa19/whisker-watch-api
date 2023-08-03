import { initializeApp, cert } from "firebase-admin/app";
import creds from "../creds.js"
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert(creds)
});

export default getFirestore();