<script lang="ts" setup>
import { resetTicket } from '@/store'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { ticket } from '@/store'

const route = useRoute()

ticket.value.ticketType = route.meta.person as TicketType
ticket.value.ticketStartTime = new Date().toISOString()

onBeforeRouteLeave(() => {
  if (ticket.value.ticketType !== undefined) {
    const leave = confirm('Czy chcesz anulować aktualną akredytację?')

    if (leave) {
      resetTicket()
    }

    return leave
  }
})
</script>

<template>
  <div class="container">
    <div class="text-center mt-5 mb-7">
      <RouterLink class="text-xl skierfont" to="/start">
        SkierCon akredytacja
      </RouterLink>
      <div>{{ $route.name }}</div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
