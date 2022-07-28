<script lang="ts" setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { addTicketToSell, resetTicketsToSell, ticketsToSell } from '@/store'

const route = useRoute()

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
    <div class="text-center mt-5 mb-7">
      <div>{{ $route.name }}</div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
