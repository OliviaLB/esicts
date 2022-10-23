import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR9wKGY9DUU78JEzOpxIAfG8PNqfthRMI",
  authDomain: "esic-d92c3.firebaseapp.com",
  databaseURL:
    "https://esic-d92c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esic-d92c3",
  storageBucket: "esic-d92c3.appspot.com",
  messagingSenderId: "1088945617488",
  appId: "1:1088945617488:web:9e4787b5d85c9a46076f55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
