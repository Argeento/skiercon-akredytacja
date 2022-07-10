<script lang="ts" setup>
import { ticket } from '@/store'

let options: string[]

if (ticket.value.personType === 'Gość') {
  options = ['Gość 1', 'Gość 2'].sort()
}

if (ticket.value.personType === 'Twórca Programu') {
  options = ['Twórca 1', 'Twórca 2'].sort()
}
</script>

<template>
  <v-select
    label="Twórca programu"
    :options="options"
    v-model="ticket.personName"
  />
  <Pagination />
</template>

<style lang="scss" scoped></style>
