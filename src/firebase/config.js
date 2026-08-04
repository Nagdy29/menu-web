import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOqDo0t65M4PJh41ncAGq5o4TF6MddwgE",
  authDomain: "menu-38be7.firebaseapp.com",
  projectId: "menu-38be7",
  storageBucket: "menu-38be7.firebasestorage.app",
  messagingSenderId: "291772077996",
  appId: "1:291772077996:web:80aee440a09adfb31c8c09",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;