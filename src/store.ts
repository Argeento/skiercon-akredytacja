import { ref } from 'vue'
import { addTicket } from './db'

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
  age?: Age
  sleep?: Sleep
  numberOfIds?: number
}

export const ticket = ref<Ticket>({})

export function resetTicket() {
  ticket.value = {}
}

export async function sendTicket() {
  ticket.value.ticketEndTime = new Date()
  await addTicket(ticket.value)
  resetTicket()
}
