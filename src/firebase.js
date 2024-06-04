import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT01lunLbCTZ6WJdD2q97sDBnedwwKAXI",
  authDomain: "clone-4b395.firebaseapp.com",
  projectId: "clone-4b395",
  storageBucket: "clone-4b395.appspot.com",
  messagingSenderId: "165362076937",
  appId: "1:165362076937:web:eca40dc7bd585e58c497d8",
  measurementId: "G-XH06TNQ6VK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};