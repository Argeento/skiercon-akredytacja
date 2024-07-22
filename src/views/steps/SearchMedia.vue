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
import Counter from '../../components/global/Counter.vue'
import type { WithLabel, GsMedium, TicketInput } from '@/types'

const selected = ref<WithLabel<GsMedium> | TicketInput | undefined>(
  ticketsToSell.value[0].name ? ticketsToSell.value[0] : undefined
)

const multiTicket = ref(1)
const soldTickets = computed(
  () =>
    tickets.value.filter(
      ticket =>
        ticket.ticketType === 'medium' && ticket.id === selected.value?.id
    ).length
)

watch(multiTicket, multiTicket => {
  if (selected.value) {
    resetTicketsToSell()
    addTicketToSell(getDefaultTicket('medium'))
    updateTicketToSellByIndex(0, selected.value)
    for (let i = 0; i < multiTicket - 1; i++) {
      addTicketToSell(copyLastTicketToSell())
    }
  }
})

const options = computed<Array<WithLabel<GsMedium>>>(() => {
  if (!ticket.value.ticketType) {
    return []
  }

  return people.value.media
    .filter(
      person =>
        person.tickets > 1 ||
        !tickets.value.some(ticket => ticket.id === person.id)
    )
    .map(person => ({ label: getTicketLabel(person), ...person }))
    .sort((a, b) => a.label.localeCompare(b.label))
})

watch(selected, selected => {
  resetTicketsToSell()
  addTicketToSell(getDefaultTicket('medium'))
  if (selected) {
    updateTicketToSellByIndex(0, selected)
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
    <div class="mb-3">Wyszukaj <i>Media</i>:</div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-4"
    />

    <div
      v-if="ticket.ticketType === 'medium' && ticket.tickets > 1"
      :class="{ 'text-red-500': ticket.tickets === soldTickets }"
    >
      Wykorzystano już
      <b>{{ soldTickets }} z {{ ticket.tickets }}</b> akredytacji
    </div>
    <div v-else class="mb-8"></div>
  </div>

  <div v-if="ticket.ticketType === 'medium' && ticket.tickets > 1">
    <Counter
      label="Ile wejściówek do wydania?"
      v-model="multiTicket"
      :min="1"
      :max="ticket.tickets === soldTickets ? 100 : ticket.tickets - soldTickets"
    />
  </div>

  <div class="card" v-if="selected">
    <div class="mb-4">
      Przygotuj odpowiedni identyfikator<TicketsToSellCounter />:
    </div>

    <img
      class="badge-image shadow mb-5"
      :src="getBadgeImage(ticket.ticketType)"
      alt=""
    />
  </div>

  <Pagination
    v-if="ticket.ticketType === 'medium'"
    :can-move-forward="!!ticketsToSell[0]?.name && soldTickets < ticket.tickets"
  />
</template>

<style lang="scss" scoped></style>
