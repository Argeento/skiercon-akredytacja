import type { Person } from './store'

export function getPlakietkaRevers(personType: Person): string {
  const reversMap: Record<Person, string> = {
    Gość: '/img/gosc-back.png',
    Media: '/img/media-back.png',
    'Twórca Programu': '/img/program-back.png',
    Uczestnik: '/img/uczestnik-back.png',
    Wolontariusz: '/img/szop-lis-dzik-back.png',
    Wystawca: '/img/wystawca-back.png'
  }

  return reversMap[personType]
}
