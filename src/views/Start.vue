<script lang="ts" setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import {
  ticket,
  addTicketToSell,
  resetTicket,
  resetTicketsToSell
} from '@/store'

const route = useRoute()

ticket.value.ticketType = route.meta.person as TicketType
ticket.value.ticketStartTime = new Date().toISOString()

addTicketToSell({
  ticketType: route.meta.person as TicketType,
  ticketStartTime: new Date().toISOString()
})

onBeforeRouteLeave(() => {
  if (ticket.value.ticketType !== undefined) {
    const leave = confirm('Czy chcesz anulować aktualną akredytację?')

    if (leave) {
      resetTicket()
      resetTicketsToSell()
    }

    return leave
  }
})
</script>

<template>
  <div class="container">
    <div class="text-center mt-5 mb-7">
      <div>{{ $route.name }}</div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
