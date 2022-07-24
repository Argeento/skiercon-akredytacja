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
type Discount = '50%' | ''

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

type GsItem = {
  id: string
  name: string
  nick: string
  lastName: string
  discount: Discount
  volunteerType?: VolunteerType
  tickets: number
}
