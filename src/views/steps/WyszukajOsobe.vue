<script lang="ts" setup>
import { people, ticket, tickets } from '@/store'
import { onMounted, ref, watch } from 'vue'
import { getVolunteerBadgeImage } from '@/utils'

const options = ref<any[]>([])
const selected = ref<WithLabel<Ticket>>()

if (ticket.value.ticketType === 'Gość') {
  options.value = []
}

if (ticket.value.ticketType === 'Twórca Programu') {
  options.value = people.value.program
    .map(person => {
      const nick = person.nick ? ` "${person.nick}" ` : ' '
      const group = person.group ? ` - ${person.group}` : ''
      return {
        label: `${person.name}${nick}${person.lastName}${group}`,
        ...person
      }
    })
    .filter(person => {
      return !tickets.value.some(ticket => ticket.id === person.id)
    })
}

if (ticket.value.ticketType === 'Wolontariusz') {
}

watch(selected, selected => {
  if (selected) {
    Object.assign(ticket.value, selected)
  }
})

const searchFor: Partial<Record<TicketType, string>> = {
  'Twórca Programu': 'Twórcę Programu',
  Gość: 'Gościa',
  Wolontariusz: 'Wolontariusza'
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

  <div class="card" v-if="selected && ticket.volunteerType">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getVolunteerBadgeImage(ticket.volunteerType!)"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticket.name" />
</template>

<style lang="scss" scoped></style>
