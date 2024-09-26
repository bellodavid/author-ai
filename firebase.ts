import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9UmqE8nUv2waSGmDMmzelwCVM8a68gPY",
  authDomain: "skeptic-bb988.firebaseapp.com",
  projectId: "skeptic-bb988",
  storageBucket: "skeptic-bb988.appspot.com",
  messagingSenderId: "440997514902",
  appId: "1:440997514902:web:8f3bfaa2481ac62410bcb7",
  measurementId: "G-7RLVWLLJ3M",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
