// src/lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ❌ Storage removed because not available on free plan
 import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8q7_FmMdmSScOwX_pqjJdPqwfnY4VTZk",
  authDomain: "btec-service-website.firebaseapp.com",
  projectId: "btec-service-website",
  storageBucket: "btec-service-website.firebasestorage.app",
  messagingSenderId: "987469269378",
  appId: "1:987469269378:web:59cbac66c30ea91a31e79b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// ❌ Storage disabled
 export const storage = getStorage(app);
