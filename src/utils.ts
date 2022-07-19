const badgesMap: Record<Person, string> = {
  Gość: 'gosc',
  Media: 'media',
  'Twórca Programu': 'program',
  Uczestnik: 'uczestnik',
  Wolontariusz: 'szop-lis-dzik',
  Wystawca: 'wystawca'
}

const volunteersMap: Record<VolunteerType, string> = {
  Dzik: 'dzik',
  Lis: 'lis',
  Organizator: 'organizator',
  Szop: 'szop'
}

export function getImage(fileName: string): string {
  return `${import.meta.env.BASE_URL}img/${fileName}`
}

export function getBadgeRevers(personType: Person): string {
  return getImage(`${badgesMap[personType]}-back.png`)
}

export function getBadgeImage(personType: Person): string {
  return getImage(`${badgesMap[personType]}-front.png`)
}

export function getVolunteerBadgeImage(volunteerType: VolunteerType) {
  return getImage(`${volunteersMap[volunteerType]}-front.png`)
}

export function getPersonVariation(personType: Person): string {
  const variationMap: Record<Person, string> = {
    Gość: 'Gościa',
    Media: 'Media',
    'Twórca Programu': 'Twórcy Programu',
    Uczestnik: 'Uczestnika',
    Wolontariusz: 'Wolontariusza',
    Wystawca: 'Wystawcy'
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
