<script lang="ts" setup>
import { firestoreInstance } from '@/plugins/firestore'
import type { TicketOutput, TicketType } from '@/types'
import { getTicketFirstLineLabel, getTicketSecondLineLabel } from '@/utils'
import dayjs from 'dayjs'
import { computed, ref, type PropType } from 'vue'

const props = defineProps({
  ticket: {
    type: Object as PropType<TicketOutput>,
    required: true
  },
  withoutRemove: {
    type: Boolean,
    required: true
  }
})

const isLoading = ref(false)

async function deleteTicket(ticketId: string) {
  if (isLoading.value) return
  if (
    !confirm(
      'Czy na pewno chcesz usunąć tę akredytację? \n' +
        JSON.stringify(props.ticket, null, 2)
    )
  )
    return
  isLoading.value = true
  await firestoreInstance.removeTicket(ticketId)
}

const ticketTypeMap: Record<TicketType, string> = {
  guest: 'Gość',
  medium: 'Media',
  normal: 'Uczestnik',
  program: 'Program',
  vendor: 'Wystawca',
  volunteer: 'Wolontariusz',
  others: 'Inny',
  vip: 'VIP',
  workers: 'Pracownik'
}

const secondLine = computed(() => getTicketSecondLineLabel(props.ticket))
</script>

<template>
  <tr>
    <td>{{ ticketTypeMap[ticket.ticketType] }}</td>
    <td>
      <div>{{ getTicketFirstLineLabel(ticket) }}</div>
      <div v-if="secondLine" class="text-sm">{{ secondLine }}</div>
    </td>
    <td>
      {{ ticket.sleep ? 'Tak' : 'Nie' }}
    </td>
    <td :title="new Date(ticket.ticketEndTime).toLocaleString('pl')">
      {{ dayjs(ticket.ticketEndTime).format('dd, HH:mm') }}
    </td>
    <td v-if="!withoutRemove">
      <button class="px-2" @click="deleteTicket(ticket.docId)">
        <span class="material-symbols-outlined remove-icon"> delete </span>
      </button>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.remove-icon {
  position: relative;
  top: 3px;
  font-size: 18px;
}
</style>
