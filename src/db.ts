// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  Firestore,
  getFirestore
} from 'firebase/firestore/lite'
import type { Ticket } from './store'

export let db: Firestore

export function initFirebaseInstance() {
  const firebaseConfig = {
    authDomain: 'skiercon-akredytacja.firebaseapp.com',
    databaseURL:
      'https://skiercon-akredytacja-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'skiercon-akredytacja',
    storageBucket: 'skiercon-akredytacja.appspot.com',
    messagingSenderId: '757533505285',
    appId: '1:757533505285:web:7c08726c8e0e3bc2fea96c',
    apiKey: 'AIzaSyA0SHRl9hg0zEWEp0byy8-ftv6xQg2lQF4'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export async function addTicket(ticket: Ticket) {
  for (let i = 0; i < ticket.numberOfIds; i++) {
    const objectToSend = JSON.parse(
      JSON.stringify({
        type: ticket.personType,
        personName: ticket.personName,
        mediaName: ticket.mediaName,
        vendorName: ticket.vendorName,
        volunteerType: ticket.volunteerType,
        sleepType: ticket.sleep,
        accStart: ticket.ticketStartTime,
        accEnd: new Date()
      })
    )

    console.log(objectToSend)
    await addDoc(collection(db, 'tickets'), objectToSend)
  }
}
