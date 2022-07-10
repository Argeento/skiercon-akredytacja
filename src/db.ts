// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  Firestore,
  getFirestore
} from 'firebase/firestore/lite'
import type { Ticket } from './store'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export let db: Firestore

export function initFirebaseInstance(apiKey: string) {
  const firebaseConfig = {
    apiKey,
    authDomain: 'skiercon-akredytacja.firebaseapp.com',
    databaseURL:
      'https://skiercon-akredytacja-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'skiercon-akredytacja',
    storageBucket: 'skiercon-akredytacja.appspot.com',
    messagingSenderId: '757533505285',
    appId: '1:757533505285:web:7c08726c8e0e3bc2fea96c'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export function addTicket(ticket: Ticket) {
  return addDoc(collection(db, 'tickets'), ticket)
}
