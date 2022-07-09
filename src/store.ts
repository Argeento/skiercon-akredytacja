import { ref } from 'vue'

export type Person =
  | 'Uczestnik'
  | 'Twórca Programu'
  | 'Wolontariusz'
  | 'Gość'
  | 'Media'
  | 'Wystawca'

export type Age = '13-' | '13-18' | '18+'
export type Sleep = 'nope' | '1' | 'SOSW' | 'PN' | 'B2'
export type Volunteer = 'Dzik' | 'Lis' | 'Szop' | 'Organizator'

export type Accreditation = {
  accreditationStartTime?: Date
  accreditationEndTime?: Date
  personType?: Person
  personName?: string
  mediaName?: string
  vendorName?: string
  volunteerType?: Volunteer
  age?: Age
  sleep?: Sleep
  numberOfIds?: number
}

export const accreditation = ref<Accreditation>({})

export function resetAccreditation() {
  accreditation.value = {}
}

export function sendAccreditation() {
  accreditation.value.accreditationEndTime = new Date()
  alert(JSON.stringify(accreditation.value, null, 2))
  resetAccreditation()
}
