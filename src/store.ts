import { ref, watch, computed } from 'vue'

export function getDefaultTicket() {
  return {
    sleep: 'nope',
    id: undefined,
    name: undefined
  } as TicketInput
}

export const ticketsToSell = ref<TicketInput[]>([])
export const ticket = computed(() => ticketsToSell.value[0] ?? {})

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

export function updateTicketToSellByIndex(
  index: number,
  newValues: Partial<TicketInput>
) {
  if (ticketsToSell.value[index]) {
    // @ts-ignore
    ticketsToSell.value[index] = {
      ...ticketsToSell.value[index],
      ...newValues
    }

    return ticketsToSell.value[index]
  }
}

export function updateTicketToSellByTicketId(
  id: string,
  newValues: Partial<TicketInput>
) {
  const ticketId = ticketsToSell.value.findIndex(ticket => ticket.id === id)
  if (ticketId > -1) {
    updateTicketToSellByIndex(ticketId, newValues)
  } else {
    addTicketToSell(newValues)
  }
}

export function resetTicketsToSell() {
  ticketsToSell.value = []
}

export function removeLastTicketToSell() {
  return ticketsToSell.value.pop()
}

export function removeTicketToSellById(id: string) {
  ticketsToSell.value = ticketsToSell.value.filter(ticket => ticket.id !== id)
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
