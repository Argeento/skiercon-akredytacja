, Personimport { useRoute } from 'vue-router';
<script lang="ts" setup>
import { resetTicket, type Person } from '@/store'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { ticket } from '@/store'

const route = useRoute()

ticket.value.personType = route.meta.person as Person
ticket.value.ticketStartTime = new Date()

onBeforeRouteLeave(() => {
  if (ticket.value.personType !== undefined) {
    const leave = confirm('Czy chcesz anulować aktualną akredytację?')

    if (leave) {
      resetTicket()
    }

    return leave
  }
})
</script>

<template>
  <div>{{ $route.meta.person }}</div>
  <router-view />
</template>

<style lang="scss" scoped></style>
