// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_ZTXnAeMFEVMvLTmU18Ldt1DsVcJE-o",
  authDomain: "markdownapp-16a1f.firebaseapp.com",
  projectId: "markdownapp-16a1f",
  storageBucket: "markdownapp-16a1f.appspot.com",
  messagingSenderId: "476523357208",
  appId: "1:476523357208:web:f6dcfedfa122b571b48f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const notesCollection = collection(db, "notes")
