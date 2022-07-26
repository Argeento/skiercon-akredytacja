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
type Sleep = 'nope' | '1' | 'SOSW' | 'PN' | 'B2'
type VolunteerType = 'DZIK' | 'LIS' | 'SZOP' | 'ORG'
type Discount = '50%' | '100%'

type GsProgram = {
  ticketType: 'program'
  id: number
  name: string
  lastName: string
  info?: string
  nick?: string
  discount: Discount
  group: string
}

type GsVendor = {
  ticketType: 'vendor'
  id: number
  name: string
  tickets: number
}

type GsVolunteer = {
  ticketType: 'volunteer'
  id: number
  name: string
  nick?: string
  lastName: string
  discount: Discount
  volunteerType: VolunteerType
}

type GsMedium = {
  ticketType: 'medium'
  id: number
  name: string
  tickets: number
  info?: string
}

type GsGuest = {
  ticketType: 'guest'
  id: number
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
