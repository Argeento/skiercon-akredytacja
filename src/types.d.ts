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

type Ticket = {
  docId?: string
  ticketStartTime?: string
  ticketEndTime?: string
  personType?: Person
  personName?: string
  personNameId?: string
  mediaName?: string
  mediaId?: number
  vendorName?: string
  vendorNameId?: string
  volunteerType?: VolunteerType
  sleep: Sleep
  numberOfIds: number
}

type Media = {
  id: number
  name: string
  tickets: number
}

type Volunteer = {
  id: number
  name: string
  lastname: string
  nick: string
  volunteerType: VolunteerType
  discount: '50%' | '100%'
}

type CollectionName = 'guests' | 'tickets' | 'media' | 'volunteers'
