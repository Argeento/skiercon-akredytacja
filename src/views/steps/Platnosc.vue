<script lang="ts" setup>
import { ticket } from '@/store'
const ticketPrice = new Date().getDay() === 0 ? 20 : 40
</script>

<template>
  <div class="card">
    <div class="">
      Przyjmij opłatę za konwent <b>{{ ticketPrice }}zł</b>
    </div>
    <div class="text-red-500" v-if="ticket.personType === 'Uczestnik'">
      Dzieci do 10 roku życia wchodzą za darmo!
    </div>
  </div>

  <Pagination />
</template>

<style lang="scss" scoped></style>
