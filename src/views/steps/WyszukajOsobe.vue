<script lang="ts" setup>
import { people, ticket, tickets } from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { getVolunteerBadgeImage } from '@/utils'

const selected = ref<WithLabel<Ticket>>()

const options = computed(() => {
  let list: any[] = []
  if (ticket.value.ticketType === 'guest') {
    list = people.value.guests.map(person => {
      const info = person.info ? ` - ${person.info}` : ''
      return {
        label: `${person.name} ${person.lastName}${info}`,
        ...person
      }
    })
  } else if (ticket.value.ticketType === 'program') {
    list = people.value.program.map(person => {
      const nick = person.nick ? ` "${person.nick}" ` : ' '
      const group = person.group ? ` - ${person.group}` : ''
      return {
        label: `${person.name}${nick}${person.lastName}${group}`,
        ...person
      }
    })
  } else if (ticket.value.ticketType === 'volunteer') {
    list = people.value.volunteers.map(person => {
      const nick = person.nick ? ` "${person.nick}" ` : ' '
      const type = person.volunteerType ? ` - ${person.volunteerType}` : ''
      return {
        label: `${person.name}${nick}${person.lastName}${type}`,
        ...person
      }
    })
  } else if (ticket.value.ticketType === 'medium') {
    list = people.value.media.map(person => {
      return {
        label: person.name,
        ...person
      }
    })
  } else if (ticket.value.ticketType === 'vendor') {
    list = people.value.vendors.map(person => {
      return {
        label: person.name,
        ...person
      }
    })
  }

  return list
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
