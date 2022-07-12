<script lang="ts" setup>
import { ticket, type Person } from '@/store'
import { onMounted, ref } from 'vue'
import guests from '@/assets/guests.json'

let options: string[]

if (ticket.value.personType === 'Gość') {
  options = guests.sort()
}

if (ticket.value.personType === 'Twórca Programu') {
  options = ['Twórca 1', 'Twórca 2'].sort()
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
      label="Twórca programu"
      :options="options"
      v-model="ticket.personName"
      class="mb-8"
    />
  </div>
  <Pagination :can-move-forward="!!ticket.personName" />
</template>

<style lang="scss" scoped></style>
