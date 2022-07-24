import type { Unsubscribe } from '@firebase/util'
import axios from 'axios'
import { orderBy } from 'firebase/firestore'
import { ref, watch } from 'vue'
import { firestoreInstance } from './plugins/firestore'
import { parseGsData } from './utils'

export const ticket = ref<Ticket>(getDefaultTicket())

export function resetTicket(): void {
  ticket.value = getDefaultTicket()
}

function getDefaultTicket(): Ticket {
  return {
    numberOfIds: 1,
    sleep: 'nope'
  }
}

watch(
  ticket,
  () => {
    console.log(JSON.stringify(ticket.value, null, 2))
  },
  {
    deep: true
  }
)

export const isUserAuth = ref(false)
export const tickets = ref<Ticket[]>([])
export const sheetId = ref('')
export const people = ref<Record<string, GsItem[]>>({
  program: [],
  vendors: [],
  volunteers: [],
  media: [],
  guests: []
})

watch(isUserAuth, isAuth => {
  if (isAuth) {
    initData()
  } else {
    unsub()
  }
})

let unsub: Unsubscribe
async function initData() {
  const { unsubscribe } = firestoreInstance.useCollection<Ticket>(
    'tickets',
    [orderBy('ticketEndTime', 'desc')],
    tickets
  )
  unsub = unsubscribe

  const [program, vendors, volunteers, media, guests] = (
    await Promise.all([
      axios.get('/values/program'),
      axios.get('/values/wystawcy'),
      axios.get('/values/wolololo'),
      axios.get('/values/media'),
      axios.get('/values/goście')
    ])
  ).map(parseGsData)

  people.value.program = program
  people.value.vendors = vendors
  people.value.volunteers = volunteers
  people.value.media = media
  people.value.guests = guests
}
