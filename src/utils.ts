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
  SZOP: 'szop',
  OGR: ''
}

export enum Color {
  Normal = 'gold',
  Guests = 'orange',
  Media = 'tomato',
  Volunteers = 'grey',
  Vendors = '#87CEFA',
  Program = '#9ACD32'
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

export function getPersonVariation(
  personType: TicketType,
  multi = false
): string {
  const variationMap: Record<TicketType, string> = {
    guest: 'Gościa',
    medium: 'Media',
    program: 'Twórcy Programu',
    normal: 'Uczestnika',
    volunteer: 'Wolontariusza',
    vendor: 'Wystawcy'
  }

  const multiVariationMap: Record<TicketType, string> = {
    guest: 'Gości',
    medium: 'Medii',
    program: 'Twórców Programu',
    normal: 'Uczestników',
    volunteer: 'Wolontariuszów',
    vendor: 'Wystawców'
  }

  return multi ? multiVariationMap[personType] : variationMap[personType]
}

export function localeCompare(a: string, b: string) {
  return a.localeCompare(b)
}

export function getTicketLabel(person: GsPerson | Normal) {
  let label = ''

  if (person.ticketType === 'guest') {
    const info = person.info ? ` - ${person.info}` : ''
    const skiercon = person.giftPack ? ' - Gość Skierconu' : ''
    label += `${person.name} ${person.lastName}${skiercon}${info}`
  }

  if (person.ticketType === 'program') {
    const nick = person.nick ? ` "${person.nick}" ` : ' '
    const group = person.group ? ` - ${person.group}` : ''
    label += `${person.name}${nick}${person.lastName}${group}`
  }

  if (person.ticketType === 'volunteer') {
    const nick = person.nick ? ` "${person.nick}" ` : ' '
    const type = person.volunteerType ? ` - ${person.volunteerType}` : ''
    label += `${person.name}${nick}${person.lastName}${type}`
  }

  if (person.ticketType === 'medium') {
    label += `${person.name} ${person.lastName} ${
      person.mediaName ? ` - ${person.mediaName}` : ''
    }`
  }

  if (person.ticketType === 'vendor') {
    label += person.name
  }

  if (person.ticketType === 'normal') {
    label += '-'
  }

  return label
}
