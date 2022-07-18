<script lang="ts" setup>
import { ticket } from '@/store'
import { onMounted, ref } from 'vue'
import guests from '@/assets/guests.json'
import { api } from '@/db'
import { orderBy } from 'firebase/firestore/lite'

let options = ref<any[]>([])

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
      label: `${person.name} ${person.lastname} (${person.nick})`
    }))
  }

  fetchVolunteers()
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
    <v-select ref="vselect" :options="options" class="mb-8" />
  </div>
  <Pagination :can-move-forward="!!ticket.personName" />
</template>

<style lang="scss" scoped></style>
