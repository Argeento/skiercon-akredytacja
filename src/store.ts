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
export const tickets = ref<TicketOutput[]>([])
export const people = ref<GsPeople>({
  program: [],
  vendors: [],
  volunteers: [],
  media: [],
  guests: []
})
