<script lang="ts" setup>
import { accreditation } from '@/store'

let options: string[]

if (accreditation.value.personType === 'Gość') {
  options = ['Gość 1', 'Gość 2'].sort()
}

if (accreditation.value.personType === 'Twórca Programu') {
  options = ['Twórca 1', 'Twórca 2'].sort()
}
</script>

<template>
  <v-select
    label="Twórca programu"
    :options="options"
    v-model="accreditation.personName"
  />
  <Pagination />
</template>

<style lang="scss" scoped></style>
