import { ref, watch } from 'vue'

const TICKET_LS = 'ticket'

export type Person =
  | 'Uczestnik'
  | 'Twórca Programu'
  | 'Wolontariusz'
  | 'Gość'
  | 'Media'
  | 'Wystawca'

export type Age = '13-' | '13-18' | '18+'
export type Sleep = 'nope' | '1' | 'SOSW' | 'PN' | 'B2'
export type Volunteer = 'Dzik' | 'Lis' | 'Szop' | 'Organizator'

export type Ticket = {
  ticketStartTime?: Date
  ticketEndTime?: Date
  personType?: Person
  personName?: string
  mediaName?: string
  vendorName?: string
  volunteerType?: Volunteer
  sleep: Sleep
  numberOfIds: number
}

export const ticket = ref<Ticket>(getTicketFromLS() ?? getDefaultTicket())

export function resetTicket(): void {
  ticket.value = getDefaultTicket()
}

watch(
  ticket,
  ticket => {
    window.localStorage.setItem(TICKET_LS, JSON.stringify(ticket))
  },
  {
    deep: true
  }
)

function getDefaultTicket(): Ticket {
  return {
    numberOfIds: 1,
    sleep: 'nope'
  }
}

function getTicketFromLS(): Ticket | undefined {
  const ticketString = localStorage.getItem(TICKET_LS)
  if (ticketString) {
    return JSON.parse(ticketString)
  }
}
