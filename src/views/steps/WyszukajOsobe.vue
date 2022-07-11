<script lang="ts" setup>
import { ticket, type Person } from '@/store'
import { onMounted, ref } from 'vue'

let options: string[]

if (ticket.value.personType === 'Gość') {
  options = ['Gość 1', 'Gość 2'].sort()
}

if (ticket.value.personType === 'Twórca Programu') {
  options = ['Twórca 1', 'Twórca 2'].sort()
}

const searchFor: Partial<Record<Person, string>> = {
  'Twórca Programu': 'Twórcę Programu',
  Gość: 'Gościa Skierconu'
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
    <p class="mb-3">Wyszukaj {{ searchFor[ticket.personType!] }}:</p>
    <v-select
      ref="vselect"
      label="Twórca programu"
      :options="options"
      v-model="ticket.personName"
      class="mb-8"
    />
  </div>
  <Pagination />
</template>

<style lang="scss" scoped></style>
