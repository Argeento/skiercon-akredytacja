const badgesMap: Record<TicketType, string> = {
  Gość: 'gosc',
  Media: 'media',
  'Twórca Programu': 'program',
  Uczestnik: 'uczestnik',
  Wolontariusz: 'szop-lis-dzik',
  Wystawca: 'wystawca'
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

const gsHeadersMap: Record<string, keyof GsItem> = {
  lp: 'id',
  imię: 'name',
  nazwa: 'name',
  pseudonim: 'nick',
  nazwisko: 'lastName',
  zniżka: 'discount',
  whodis: 'volunteerType',
  ilewejściówek: 'tickets'
}

export function parseGsData(data: any): GsItem[] {
  // @ts-ignore
  const headers = data.values[0].map(header =>
    header.toLowerCase().replace(/ /g, '').trim()
  )
  const output: GsItem[] = []

  for (const item of data.values.slice(1)) {
    // @ts-ignore
    const gsItem = headers.reduce((acc, header, index) => {
      if (gsHeadersMap[header]) {
        acc[gsHeadersMap[header]] = item[index]
      }
      return acc
    }, {} as GsItem)

    if (gsItem.name) {
      output.push(gsItem)
    }
  }

  return output
}
