export type WithLabel<T extends Record<string, unknown>> = T & {
  label: string
}

export type TicketType =
  | 'normal'
  | 'program'
  | 'volunteer'
  | 'guest'
  | 'medium'
  | 'vendor'
  | 'worker'
  | 'other'
  | 'vip'

export type Age = '13-' | '13-18' | '18+'
export type Sleep = boolean
export type VolunteerType =
  | 'LIS'
  | 'SZOP'
  | 'ŁOŚ'
  | 'RYŚ'
  | 'MIŚ'
  | 'ORG'
  | 'OGR'
export type Discount = '50%' | '100%' | '75%' | '25%'

export type GsProgram = {
  ticketType: 'program'
  id: string
  name: string
  lastName: string
  info?: string
  nick?: string
  discount: Discount
  group: string
}

export type GsVendor = {
  ticketType: 'vendor'
  id: string
  name: string
  tickets: number
}

export type GsVolunteer = {
  ticketType: 'volunteer'
  id: string
  name: string
  nick?: string
  lastName: string
  discount: Discount
  volunteerType: VolunteerType
}

export type GsMedium = {
  ticketType: 'medium'
  id: string
  name: string
  tickets: number
  info?: string
  lastName: string
  mediaName: string
}

export type GsGuest = {
  ticketType: 'guest'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
  giftPack: boolean
}

export type GsWorker = {
  ticketType: 'worker'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

export type GsOther = {
  ticketType: 'other'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

export type GsVip = {
  ticketType: 'vip'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
}

export type Normal = {
  ticketType: 'normal'
  name: never
  id: never
}

export type GsPeople = {
  program: GsProgram[]
  vendors: GsVendor[]
  volunteers: GsVolunteer[]
  media: GsMedium[]
  guests: GsGuest[]
  workers: GsWorker[]
  others: GsOther[]
  vips: GsVip[]
}

export type GsPerson =
  | GsVolunteer
  | GsMedium
  | GsGuest
  | GsVendor
  | GsProgram
  | GsWorker
  | GsOther
  | GsVip

export type BaseTicket = {
  ticketStartTime?: string
  ticketEndTime?: string
  sleep: Sleep
  numberOfIds: number
}

export type TicketInput = (GsPerson | Normal) & BaseTicket
export type TicketOutput = Required<BaseTicket> & GsPerson & { docId: string }
