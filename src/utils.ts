import type { Person } from './store'

export function getBadgeRevers(personType: Person): string {
  const reversMap: Record<Person, string> = {
    Gość: 'gosc-back.png',
    Media: 'media-back.png',
    'Twórca Programu': 'program-back.png',
    Uczestnik: 'uczestnik-back.png',
    Wolontariusz: 'szop-lis-dzik-back.png',
    Wystawca: 'wystawca-back.png'
  }

  return '/skiercon-akredytacja/img/' + reversMap[personType]
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
