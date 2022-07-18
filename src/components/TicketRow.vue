<script lang="ts" setup>
import { api } from '@/db'
import { sleepMap } from '@/utils'

defineProps<{ ticket: Ticket }>()

async function deleteTicket(ticketId: string) {
  await api.removeTicket(ticketId)
}
</script>

<template>
  <tr>
    <td>{{ ticket.personType }}</td>
    <td>
      {{
        ['Media'].includes(ticket.personType!) ? '-' : sleepMap[ticket.sleep]
      }}
    </td>
    <td>
      {{ ticket.personName || ticket.mediaName || ticket.vendorName || '-' }}
    </td>
    <td :title="new Date(ticket.ticketEndTime!).toLocaleString()">
      {{ new Date(ticket.ticketEndTime!).toLocaleTimeString() }}
    </td>
    <td class="text-center">
      <button class="px-2" @click="deleteTicket(ticket.docId!)">X</button>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
