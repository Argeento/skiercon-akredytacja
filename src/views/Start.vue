<script lang="ts" setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import {
  addTicketToSell,
  currentTicketType,
  resetTicketsToSell,
  ticketsToSell
} from '@/store'

const route = useRoute()

currentTicketType.value = route.meta.person as TicketType

addTicketToSell({
  ticketType: route.meta.person as TicketType,
  ticketStartTime: new Date().toISOString()
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
