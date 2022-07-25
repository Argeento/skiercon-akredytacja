const badgesMap: Record<TicketType, string> = {
  guest: 'gosc',
  medium: 'media',
  program: 'program',
  normal: 'uczestnik',
  volunteer: 'szop-lis-dzik',
  vendor: 'wystawca'
}

const volunteersMap: Record<VolunteerType, string> = {
  DZIK: 'dzik',
  LIS: 'lis',
  ORG: 'organizator',
  SZOP: 'szop'
}

export function getImage(fileName: string): string {
  return `${import.meta.env.BASE_URL}img/${fileName}`
}

export function getBadgeRevers(personType: TicketType): string {
  return getImage(`${badgesMap[personType]}-back.png`)
}

export function getBadgeImage(personType: TicketType): string {
  return getImage(`${badgesMap[personType]}-front.png`)
}

export function getVolunteerBadgeImage(volunteerType: VolunteerType) {
  return getImage(`${volunteersMap[volunteerType]}-front.png`)
}

export function getPersonVariation(personType: TicketType): string {
  const variationMap: Record<TicketType, string> = {
    guest: 'Gościa',
    medium: 'Media',
    program: 'Twórcy Programu',
    normal: 'Uczestnika',
    volunteer: 'Wolontariusza',
    vendor: 'Wystawcy'
  }

  return variationMap[personType]
}

export function localeCompare(a: string, b: string) {
  return a.localeCompare(b)
}

export const sleepMap: Readonly<Record<Sleep, string>> = {
  '1': 'S',
  B2: 'B2',
  PN: 'N',
  SOSW: 'SOSW',
  nope: 'X'
}

export function getLabel(ticketType: TicketType) {}
