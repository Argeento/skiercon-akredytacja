// Import the functions you need from the SDKs you need
import { ticketStartTime } from '@/store'
import type { TicketInput } from '@/types'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getFirestore,
  onSnapshot,
  query,
  QueryConstraint
} from 'firebase/firestore'
import { ref } from 'vue'

export let db: Firestore

const COLLECTION_NAME = 'tickets2024'

export function initFirebaseInstance() {
  const firebaseConfig = {
    apiKey: "AIzaSyDZb7-ioFy32A5bvByg61rOWrdXhqvpXlU",
    authDomain: "skiercon-akredytacja2025.firebaseapp.com",
    projectId: "skiercon-akredytacja2025",
    storageBucket: "skiercon-akredytacja2025.firebasestorage.app",
    messagingSenderId: "94708514487",
    appId: "1:94708514487:web:0bcbf9421a96454c225732",
    measurementId: "G-W7WTELX3X1"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export const firestoreInstance = {
  async addTicket(ticket: TicketInput) {
    for (let i = 0; i < ticket.numberOfIds; i++) {
      ticket.ticketStartTime = ticketStartTime.value
      ticket.ticketEndTime = new Date().toISOString()
      const objectToSend = JSON.parse(JSON.stringify(ticket))
      await addDoc(collection(db, COLLECTION_NAME), objectToSend)
    }
  },

  async addTickets(tickets: TicketInput[]) {
    for (const ticket of tickets) {
      ticket.ticketStartTime = ticketStartTime.value
      ticket.ticketEndTime = new Date().toISOString()
      const objectToSend = JSON.parse(JSON.stringify(ticket))
      await addDoc(collection(db, COLLECTION_NAME), objectToSend)
    }
  },

  async removeTicket(docId: string) {
    const docRef = doc(db, COLLECTION_NAME, docId)
    await deleteDoc(docRef)
  },

  useCollection<T extends any>(
    collectionName: typeof COLLECTION_NAME,
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
