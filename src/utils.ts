const badgesMap: Record<Person, string> = {
  Gość: 'gosc',
  Media: 'media',
  'Twórca Programu': 'program',
  Uczestnik: 'uczestnik',
  Wolontariusz: 'szop-lis-dzik',
  Wystawca: 'wystawca'
}

export function getBadgeRevers(personType: Person): string {
  return `${import.meta.env.BASE_URL}img/${badgesMap[personType]}-back.png`
}

export function getBadgeImage(personType: Person): string {
  return `${import.meta.env.BASE_URL}img/${badgesMap[personType]}-front.png`
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
