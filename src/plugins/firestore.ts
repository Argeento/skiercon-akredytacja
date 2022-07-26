// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getFirestore,
  query,
  QueryConstraint,
  onSnapshot
} from 'firebase/firestore'
import { ref } from 'vue'

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

export const firestoreInstance = {
  async addTicket(ticket: TicketInput) {
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

  useCollection<T extends any>(
    collectionName: 'tickets',
    customQuery: QueryConstraint[] = [],
    data = ref<T[]>([])
  ) {
    const col = collection(db, collectionName)
    const q = query(col, ...customQuery)

    const unsubscribe = onSnapshot(q, querySnapshot => {
      data.value = []
      querySnapshot.forEach(doc => {
        // @ts-ignore
        data.value.push({
          docId: doc.id,
          ...doc.data()
        })
      })
    })

    return { unsubscribe, data }
  }
}
