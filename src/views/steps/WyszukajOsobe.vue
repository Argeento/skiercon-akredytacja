<script lang="ts" setup>
import { ticket } from '@/store'
import { onMounted, ref, watch } from 'vue'
import guests from '@/assets/guests.json'
import { api } from '@/db'
import { orderBy } from 'firebase/firestore'
import { getVolunteerBadgeImage } from '@/utils'

const options = ref<any[]>([])
const selected = ref<Volunteer & { label: string }>()

if (ticket.value.personType === 'Gość') {
  options.value = guests.sort()
}

if (ticket.value.personType === 'Twórca Programu') {
  options.value = ['Twórca 1', 'Twórca 2'].sort()
}

if (ticket.value.personType === 'Wolontariusz') {
  async function fetchVolunteers() {
    const volunteers = await api.getCollection<Volunteer>('volunteers', [
      orderBy('name', 'asc')
    ])

    options.value = volunteers.map(person => ({
      label: `${person.name} ${person.lastname} - "${person.nick}" (${person.volunteerType})`,
      ...person
    }))
  }

  fetchVolunteers()

  watch(selected, () => {
    if (selected.value) {
      ticket.value.personName = selected.value.label
      ticket.value.personDocId = selected.value.docId
      ticket.value.volunteerType = selected.value.volunteerType
      ticket.value.discount = selected.value.discount
    } else {
      ticket.value.personName = undefined
      ticket.value.volunteerType = undefined
      ticket.value.personDocId = undefined
      ticket.value.discount = undefined
    }
  })
}

const searchFor: Partial<Record<Person, string>> = {
  'Twórca Programu': 'Twórcę Programu',
  Gość: 'Gościa',
  Wolontariusz: 'Wolontariusza'
}

const vselect = ref()
onMounted(() => {
  if (!ticket.value.personName) {
    vselect.value.searchEl.focus()
  }
})
</script>

<template>
  <div class="card">
    <div class="mb-3">
      Wyszukaj <i>{{ searchFor[ticket.personType!] }}</i>
    </div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-8"
    />
  </div>

  <div class="card" v-if="selected && ticket.volunteerType">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getVolunteerBadgeImage(ticket.volunteerType!)"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticket.personName" />
</template>

<style lang="scss" scoped></style>
