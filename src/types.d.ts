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
}

type GsPerson = GsVolunteer | GsMedium | GsGuest | GsVendor | GsProgram

type BaseTicket = {
  ticketStartTime?: string
  ticketEndTime?: string
  sleep: Sleep
  numberOfIds: number
}

type TicketInput = (GsPerson | Normal) & BaseTicket
type TicketOutput = Required<BaseTicket> & GsPerson & { docId: string }
