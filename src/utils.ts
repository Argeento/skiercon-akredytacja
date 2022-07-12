import type { Person } from './store'

export function getBadgeRevers(personType: Person): string {
  const reversMap: Record<Person, string> = {
    Gość: 'gosc',
    Media: 'media',
    'Twórca Programu': 'program',
    Uczestnik: 'uczestnik',
    Wolontariusz: 'szop-lis-dzik',
    Wystawca: 'wystawca'
  }

  return `${import.meta.env.BASE_URL}/img/${reversMap[personType]}-back.png`
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
