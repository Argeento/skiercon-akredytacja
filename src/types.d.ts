import { info } from 'sass'

type WithLabel<T extends Record<string, unknown>> = T & {
  label: string
}

type TicketType =
  | 'normal'
  | 'program'
  | 'volunteer'
  | 'guest'
  | 'medium'
  | 'vendor'
  | 'worker'
  | 'other'
  | 'vip'

type Age = '13-' | '13-18' | '18+'
type Sleep = boolean
type VolunteerType = 'LIS' | 'SZOP' | 'ŁOŚ' | 'RYŚ' | 'MIŚ'
type Discount = '50%' | '100%' | '75%' | '25%'

type GsProgram = {
  ticketType: 'program'
  id: string
  name: string
  lastName: string
  info?: string
  nick?: string
  discount: Discount
  group: string
}

type GsVendor = {
  ticketType: 'vendor'
  id: string
  name: string
  tickets: number
}

type GsVolunteer = {
  ticketType: 'volunteer'
  id: string
  name: string
  nick?: string
  lastName: string
  discount: Discount
  volunteerType: VolunteerType
}

type GsMedium = {
  ticketType: 'medium'
  id: string
  name: string
  tickets: number
  info?: string
  lastName: string
  mediaName: string
}

type GsGuest = {
  ticketType: 'guest'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
  giftPack: boolean
}

type GsWorker = {
  ticketType: 'worker'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

type GsOther = {
  ticketType: 'other'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

type GsVip = {
  ticketType: 'vip'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

type Normal = {
  ticketType: 'normal'
  name: never
  id: never
}

type GsPeople = {
  program: GsProgram[]
  vendors: GsVendor[]
  volunteers: GsVolunteer[]
  media: GsMedium[]
  guests: GsGuest[]
  workers: GsWorker[]
  others: GsOther[]
  vips: GsVip[]
}

type GsPerson =
  | GsVolunteer
  | GsMedium
  | GsGuest
  | GsVendor
  | GsProgram
  | GsWorker
  | GsOther
  | GsVip

type BaseTicket = {
  ticketStartTime?: string
  ticketEndTime?: string
  sleep: Sleep
  numberOfIds: number
}

type TicketInput = (GsPerson | Normal) & BaseTicket
type TicketOutput = Required<BaseTicket> & GsPerson & { docId: string }
