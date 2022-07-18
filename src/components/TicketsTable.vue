<script lang="ts" setup>
import TicketRow from './TicketRow.vue'

defineProps<{ tickets: Ticket[]; title?: string }>()
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
        <th>Usuń</th>
      </tr>
      <TicketRow v-for="(ticket, i) in tickets" :key="i" :ticket="ticket" />
    </table>
  </div>
</template>
