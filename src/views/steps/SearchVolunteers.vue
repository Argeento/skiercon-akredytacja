<script lang="ts" setup>
import {
  addTicketToSell,
  getDefaultTicket,
  people,
  resetTicketsToSell,
  ticket,
  tickets,
  ticketsToSell,
  updateTicketToSellByIndex
} from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { getTicketLabel, getVolunteerBadgeImage } from '@/utils'

const selected = ref<WithLabel<GsVolunteer>>()

const options = computed<Array<WithLabel<GsVolunteer>>>(() => {
  if (!ticket.value.ticketType) {
    return []
  }

  return people.value.volunteers
    .map(person => ({ label: getTicketLabel(person), ...person }))
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .sort((a, b) => a.label.localeCompare(b.label))
})

watch(selected, selected => {
  resetTicketsToSell()
  addTicketToSell(getDefaultTicket('volunteer'))
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
    <div class="mb-3">Wyszukaj <i>Wolontariusza</i></div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-8"
    />
  </div>

  <div class="card" v-if="selected && selected.volunteerType !== 'OGR'">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getVolunteerBadgeImage((ticket as GsVolunteer).volunteerType)"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticketsToSell[0]?.name" />
</template>

<style lang="scss" scoped></style>
