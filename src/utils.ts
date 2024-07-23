import type { GsPerson, Normal, TicketType, VolunteerType } from './types'

const badgesMap: Record<TicketType, string> = {
  guest: 'gosc',
  medium: 'media',
  program: 'program',
  normal: 'uczestnik',
  volunteer: 'szop-lis-los-rys',
  vendor: 'wystawca',
  others: 'uczestnik',
  vip: 'uczestnik',
  workers: 'uczestnik'
}

const volunteersMap: Record<VolunteerType, string> = {
  LIS: 'lis',
  SZOP: 'szop',
  MIŚ: 'mis',
  ŁOŚ: 'los',
  RYŚ: 'rys',
  OGR: 'ogr',
  ORG: 'organizator'
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
  return getImage(`${badgesMap[personType]}-back.jpg`)
}

export function getBadgeImage(personType: TicketType): string {
  return getImage(`${badgesMap[personType]}-front.jpg`)
}

export function getVolunteerBadgeImage(volunteerType: VolunteerType) {
  return getImage(`${volunteersMap[volunteerType]}-front.jpg`)
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
    vendor: 'Wystawcy',
    others: 'Innego',
    workers: 'Pracownika',
    vip: 'VIP'
  }

  const multiVariationMap: Record<TicketType, string> = {
    guest: 'Gości',
    medium: 'Mediów',
    program: 'Twórców Programu',
    normal: 'Uczestników',
    volunteer: 'Wolontariuszy',
    vendor: 'Wystawców',
    others: 'Innych',
    vip: 'VIPów',
    workers: 'Pracowników'
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
    const skiercon = person.giftPack ? ' - Gość SkierConu' : ''
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

export function getTicketFirstLineLabel(person: GsPerson) {
  switch (person.ticketType) {
    case 'guest':
      return person.nick
        ? `${person.name} "${person.nick}" ${person.lastName}`
        : `${person.name} ${person.lastName}`
    case 'program':
      return person.nick
        ? `${person.name} "${person.nick}" ${person.lastName}`
        : `${person.name} ${person.lastName}`
    case 'volunteer':
      return person.nick
        ? `${person.name} "${person.nick}" ${person.lastName}`
        : `${person.name} ${person.lastName}`
    case 'medium':
      return `${person.name} ${person.lastName}`
    case 'vendor':
      return person.name
    case 'vip':
      return `${person.name} ${person.lastName}`
    case 'workers':
      return `${person.name} ${person.lastName}`
    case 'others':
      return `${person.name} ${person.lastName}`
    default:
      assertUnreachable(person)
  }
}

export function getTicketSecondLineLabel(person: GsPerson) {
  switch (person.ticketType) {
    case 'guest':
      return 'Gość specjalny'
    case 'program':
      return person.group ? `Program - Grupa: ${person.group}` : 'Program'
    case 'volunteer':
      return person.volunteerType
        ? `Wolontariusz - ${person.volunteerType}`
        : 'Wolontariusz'
    case 'medium':
      return person.mediaName ? `Media: ${person.mediaName}` : 'Media'
    case 'vendor':
      return person.place ? `Wystawca - Miejsce: ${person.place}` : 'Wystawca'
    case 'vip':
      return person.info ? `Zaproszenie - ${person.info}` : 'VIP'
    case 'workers':
      return person.info ? `Pracownik - ${person.info}` : 'Pracownik'
    case 'others':
      return person.info ? `Inne - ${person.info.slice(0, 50)}` : 'Inne'
    default:
      assertUnreachable(person)
  }
}

function assertUnreachable(_x: never): never {
  throw new Error("Didn't expect to get here")
}

export function replacePolishChars(str: string) {
  return str
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ż/g, 'z')
    .replace(/ź/g, 'z')
}
