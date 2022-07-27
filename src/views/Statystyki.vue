<script lang="ts" setup>
import { tickets } from '@/store'
import { computed } from 'vue'

const sleepRoom = computed(
  () => tickets.value.filter(ticket => ticket.sleep === '1').length
)

const poleNamiotowe = computed(
  () => tickets.value.filter(ticket => ticket.sleep === 'PN').length
)

const b2 = computed(
  () => tickets.value.filter(ticket => ticket.sleep === 'B2').length
)

const uczestnicy = computed(
  // @ts-ignore todo
  () => tickets.value.filter(ticket => ticket.ticketType === 'normal').length
)

const program = computed(
  () => tickets.value.filter(ticket => ticket.ticketType === 'program').length
)
</script>

<template>
  <div class="container">
    <div class="text-lg font-bold">Uczestnicy</div>
    <div>Uczestnicy: {{ uczestnicy }}</div>
    <div>Program: {{ program }}</div>
    <div>TODO ...</div>
    <div>Razem: {{ tickets.length }}</div>

    <div class="text-lg font-bold mt-5">Nocleg</div>
    <div>Sleep room: {{ sleepRoom }}</div>
    <div>Pole namiotowe: {{ poleNamiotowe }}</div>
    <div>B2 - wystawcy: {{ b2 }}</div>
    <div>Razem: {{ sleepRoom + poleNamiotowe + b2 }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
