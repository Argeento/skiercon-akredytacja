import { ref, watch } from 'vue'

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
