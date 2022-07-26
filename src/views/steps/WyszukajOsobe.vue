<script lang="ts" setup>
import { people, ticket, tickets } from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { getTicketLabel, getVolunteerBadgeImage } from '@/utils'

const gsMap: Record<Exclude<TicketType, 'normal'>, keyof GsPeople> = {
  guest: 'guests',
  medium: 'media',
  program: 'program',
  vendor: 'vendors',
  volunteer: 'volunteers'
}

const selected = ref<WithLabel<GsPerson>>()

const options = computed<Array<WithLabel<GsPerson>>>(() => {
  if (ticket.value.ticketType === 'normal') {
    throw new Error('There is no options for normal tickets')
  }

  return people.value[gsMap[ticket.value.ticketType]]
    .map(person => ({ label: getTicketLabel(person), ...person }))
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .sort((a, b) => a.label.localeCompare(b.label))
})

watch(selected, selected => {
  if (selected) {
    Object.assign(ticket.value, selected)
  }
})

const searchFor: Partial<Record<TicketType, string>> = {
  program: 'Twórcę Programu',
  guest: 'Gościa',
  volunteer: 'Wolontariusza',
  medium: 'Medium',
  vendor: 'Wystawcę'
}

const vselect = ref()
onMounted(() => {
  if (!ticket.value.name) {
    vselect.value.searchEl.focus()
  }
})
</script>

<template>
  <div class="card">
    <div class="mb-3">
      Wyszukaj <i>{{ searchFor[ticket.ticketType!] }}</i>
    </div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-8"
    />
  </div>

  <div class="card" v-if="selected && ticket.ticketType === 'volunteer'">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getVolunteerBadgeImage(ticket.volunteerType)"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticket.name" />
</template>

<style lang="scss" scoped></style>
