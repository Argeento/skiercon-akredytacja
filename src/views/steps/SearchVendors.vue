<script lang="ts" setup>
import {
  addTicketToSell,
  copyLastTicketToSell,
  getDefaultTicket,
  people,
  resetTicketsToSell,
  ticket,
  tickets,
  ticketsToSell,
  updateTicketToSellByIndex
} from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { getTicketLabel, getBadgeImage } from '@/utils'
import TicketsToSellCounter from '../../components/global/TicketsToSellCounter.vue'

const selected = ref<WithLabel<GsVendor> | TicketInput | undefined>(
  ticketsToSell.value[0].name ? ticketsToSell.value[0] : undefined
)

const options = computed<Array<WithLabel<GsVendor>>>(() => {
  if (!ticket.value.ticketType) {
    return []
  }

  return people.value.vendors
    .map(person => ({ label: getTicketLabel(person), ...person }))
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .sort((a, b) => a.label.localeCompare(b.label))
})

watch(selected, selected => {
  resetTicketsToSell()
  addTicketToSell(getDefaultTicket('vendor'))

  if (selected && selected.ticketType === 'vendor') {
    updateTicketToSellByIndex(0, selected)
    for (let i = 0; i < selected.tickets - 1; i++) {
      addTicketToSell(copyLastTicketToSell())
    }
  }
})

const vselect = ref()
onMounted(() => {
  if (!ticket.value.name) {
    vselect.value.searchEl.focus()
  }
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Wyszukaj <i>Wystawcę</i></div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-8"
    />
  </div>

  <div class="card" v-if="selected && ticket.ticketType === 'vendor'">
    <div class="mb-4">
      Przygotuj odpowiedni identyfikator<TicketsToSellCounter />:
    </div>

    <img
      class="badge-image shadow mb-5"
      :src="getBadgeImage(ticket.ticketType)"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticketsToSell[0]?.name" />
</template>

<style lang="scss" scoped></style>
