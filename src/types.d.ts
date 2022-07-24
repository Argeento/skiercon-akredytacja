type TicketType =
  | 'Uczestnik'
  | 'Twórca Programu'
  | 'Wolontariusz'
  | 'Gość'
  | 'Media'
  | 'Wystawca'

type Age = '13-' | '13-18' | '18+'
type Sleep = 'nope' | '1' | 'SOSW' | 'PN' | 'B2'
type VolunteerType = 'DZIK' | 'LIS' | 'SZOP' | 'ORG'
type Discount = '50%' | '100%'

type Ticket = {
  docId?: string
  ticketStartTime?: string
  ticketEndTime?: string
  ticketType?: TicketType
  personName?: string
  personDocId?: string
  mediaName?: string
  mediaDocId?: string
  vendorName?: string
  vendorDocId?: string
  volunteerType?: VolunteerType
  discount?: Discount
  sleep: Sleep
  numberOfIds: number
}

type GsProgram = {
  id: number
  name: string
  lastName: string
  info?: string
  nick?: string
  discount: Discount
  group: string
}

type GsVendor = {
  id: number
  name: string
  tickets: number
}

type GsVolunteer = {
  id: number
  name: string
  nick?: string
  lastName: string
  discount: Discount
  volunteerType: VolunteerType
}

type GsMedium = {
  id: number
  name: string
  tickets: number
  info?: string
}

type GsGuest = {
  id: number
  name: string
  lastName: string
  tickets: number
  info?: string
  giftPack: boolean
}

type GsPerson = GsProgram | GsVendor | GsVolunteer | GsMedium | GsGuest
type GsPeople = {
  program: GsProgram[]
  vendors: GsVendor[]
  volunteers: GsVolunteer[]
  media: GsMedium[]
  guests: GsGuest[]
}
