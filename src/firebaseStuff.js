import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAs4FLh5yQXP_IeYCKAybk3pP6UZ7KxTzI',
  authDomain: 'hackathon-e8c91.firebaseapp.com',
  projectId: 'hackathon-e8c91'
});

const db = getFirestore();

export default db;

// import {FirebaseStuff} from 'firebasestuf.js'