type Person =
  | 'Uczestnik'
  | 'Twórca Programu'
  | 'Wolontariusz'
  | 'Gość'
  | 'Media'
  | 'Wystawca'

type Age = '13-' | '13-18' | '18+'
type Sleep = 'nope' | '1' | 'SOSW' | 'PN' | 'B2'
type VolunteerType = 'Dzik' | 'Lis' | 'Szop' | 'Organizator'
type Discount = '50%' | '100%'

type Ticket = {
  docId?: string
  ticketStartTime?: string
  ticketEndTime?: string
  personType?: Person
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

type Media = {
  docId?: string
  name: string
  tickets: number
}

type Volunteer = {
  docId?: string
  name: string
  lastname: string
  nick: string
  volunteerType: VolunteerType
  discount: Discount
}

type CollectionName = 'guests' | 'tickets' | 'media' | 'volunteers'
