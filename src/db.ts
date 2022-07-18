// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  getFirestore,
  limit,
  query,
  QueryConstraint,
  setDoc
} from 'firebase/firestore/lite'

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

export const api = {
  async addTicket(ticket: Ticket) {
    for (let i = 0; i < ticket.numberOfIds; i++) {
      ticket.ticketEndTime = new Date().toISOString()
      const objectToSend = JSON.parse(JSON.stringify(ticket))
      await addDoc(collection(db, 'tickets'), objectToSend)
    }
  },

  async removeTicket(docId: string) {
    const docRef = doc(db, 'tickets', docId)
    await deleteDoc(docRef)
  },

  async getCollection<T>(
    collectionName: CollectionName,
    customQuery: QueryConstraint[] = []
  ): Promise<T[]> {
    const col = collection(db, collectionName)
    const q = query(col, ...customQuery)
    const snap = await getDocs(q)
    return snap.docs.map(doc => {
      return {
        docId: doc.id,
        ...(doc.data() as T)
      }
    })
  },

  async addDoc(
    collection: string,
    data: Record<string, unknown>,
    docId: string
  ) {
    await setDoc(doc(db, collection, docId), data)
  }
}
