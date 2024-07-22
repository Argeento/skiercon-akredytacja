<script lang="ts" setup>
import {
  addTicketToSell,
  currentTicketType,
  resetTicketsToSell,
  ticketStartTime,
  ticketsToSell
} from '@/store'
import type { TicketType } from '@/types'
import { onBeforeRouteLeave, useRoute } from 'vue-router'

const route = useRoute()

currentTicketType.value = route.meta.person as TicketType
ticketStartTime.value = new Date().toISOString()

addTicketToSell({
  ticketType: route.meta.person as TicketType
})

onBeforeRouteLeave(() => {
  if (!ticketsToSell.value[0]?.ticketEndTime) {
    const leave = confirm('Czy chcesz anulować aktualną akredytację?')

    if (leave) {
      resetTicketsToSell()
    }

    return leave
  }
})
</script>

<template>
  <div class="container">
    <div class="text-center pt-3 pb-6 text-lg font-bold uppercase">
      <div>{{ $route.name }}</div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
