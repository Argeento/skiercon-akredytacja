<script lang="ts" setup>
import { firestoreInstance } from '@/plugins/firestore'
import { getTicketLabel, sleepMap } from '@/utils'
import { ref, type PropType } from 'vue'
import dayjs from 'dayjs'

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
</script>

<template>
  <tr>
    <td>{{ ticket.ticketType }}</td>
    <td>
      {{
        ['Media'].includes(ticket.ticketType!) ? '-' : sleepMap[ticket.sleep]
      }}
    </td>
    <td>
      {{ getTicketLabel(ticket, { extended: true }) }}
    </td>
    <td :title="new Date(ticket.ticketEndTime!).toLocaleString('pl')">
      {{ dayjs(ticket.ticketEndTime!).format('dd, HH:mm') }}
    </td>
    <td v-if="!withoutRemove" class="text-center">
      <div v-if="isLoading">Usuwanie...</div>
      <button v-else class="px-2" @click="deleteTicket(ticket.docId)">
        <span class="material-symbols-outlined remove-icon"> delete </span>
      </button>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.remove-icon {
  position: relative;
  top: 3px;
}
</style>
