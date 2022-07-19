<script lang="ts" setup>
import type { PropType } from 'vue'
import TicketRow from './TicketRow.vue'

defineProps({
  tickets: {
    type: Array as PropType<Ticket[]>,
    required: true
  },
  title: {
    type: String as PropType<string | undefined>,
    default: undefined
  },
  withoutRemove: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="shadow rounded-xl overflow-hidden my-6">
    <div v-if="$slots.default" class="px-10 py-6">
      <slot></slot>
    </div>
    <table v-if="tickets.length > 0" class="w-full">
      <tr>
        <th>Typ biletu</th>
        <th>Sleep</th>
        <th>Nazwa</th>
        <th>Data</th>
        <th v-if="!withoutRemove">Usuń</th>
      </tr>
      <TicketRow
        v-for="ticket in tickets"
        :key="ticket.docId"
        :ticket="ticket"
        :without-remove="withoutRemove"
      />
    </table>
  </div>
</template>
