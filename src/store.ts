import { ref, watch } from 'vue'

export const ticket = ref<TicketInput>(getDefaultTicket())

export function resetTicket(): void {
  ticket.value = getDefaultTicket()
}

function getDefaultTicket() {
  return {
    numberOfIds: 1,
    sleep: 'nope'
  } as TicketInput
}

export const ticketsToSell = ref<TicketInput[]>([])
export function addTicketToSell(newValues: Partial<TicketInput>) {
  // @ts-ignore
  ticketsToSell.value.push({
    ...getDefaultTicket(),
    ...newValues
  })
}

export function updateAllTicketsToSell(newValues: Partial<TicketInput>) {
  // @ts-ignore
  ticketsToSell.value = ticketsToSell.value.map(ticketToSell => {
    return {
      ...ticketToSell,
      ...newValues
    }
  })
}

export function resetTicketsToSell() {
  ticketsToSell.value = []
}

export function removeLastTicketToSell() {
  return ticketsToSell.value.pop()
}

export function copyLastTicketToSell() {
  return JSON.parse(
    JSON.stringify(ticketsToSell.value[ticketsToSell.value.length - 1])
  )
}

watch(
  ticketsToSell,
  () => {
    console.log(JSON.stringify(ticketsToSell.value, null, 2))
  },
  {
    deep: true
  }
)

export const isUserAuth = ref(false)
export const tickets = ref<TicketOutput[]>([])
export const people = ref<GsPeople>({
  program: [],
  vendors: [],
  volunteers: [],
  media: [],
  guests: []
})
