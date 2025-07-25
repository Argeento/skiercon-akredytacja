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
  | 'workers'
  | 'others'
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
  discountSleep: '' | '100%'
  group: string
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsVendor = {
  ticketType: 'vendor'
  id: string
  name: string
  tickets: number
  place: string
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsVolunteer = {
  ticketType: 'volunteer'
  id: string
  name: string
  nick?: string
  lastName: string
  discount: Discount
  volunteerType: VolunteerType
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsMedium = {
  ticketType: 'medium'
  id: string
  name: string
  tickets: number
  info?: string
  lastName: string
  mediaName: string
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsGuest = {
  ticketType: 'guest'
  id: string
  name: string
  lastName: string
  nick?: string
  tickets: number
  info?: string
  giftPack: boolean
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsWorker = {
  ticketType: 'workers'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
}

export type GsOther = {
  ticketType: 'others'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
  requiresKamilek?: boolean
  peselOk?: boolean
  krkOk?: boolean
  ok?: boolean
}

export type GsVip = {
  ticketType: 'vip'
  id: string
  name: string
  lastName: string
  tickets: number
  info?: string
  requiresKamilek: boolean
  peselOk: boolean
  krkOk: boolean
  ok: boolean
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
  vip: GsVip[]
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
