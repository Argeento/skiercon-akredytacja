<script lang="ts" setup>
import {
  addTicketToSell,
  copyLastTicketToSell,
  getDefaultTicket,
  people,
  removeTicketToSellById,
  resetTicketsToSell,
  ticket,
  tickets,
  ticketsToSell,
  updateTicketToSellByIndex
} from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { getTicketLabel, getVolunteerBadgeImage, getBadgeImage } from '@/utils'
import TicketsToSellCounter from '../../components/global/TicketsToSellCounter.vue'

const gsMap: Record<Exclude<TicketType, 'normal'>, keyof GsPeople> = {
  guest: 'guests',
  medium: 'media',
  program: 'program',
  vendor: 'vendors',
  volunteer: 'volunteers'
}

const selected = ref<WithLabel<GsPerson> | TicketInput | undefined>(
  ticketsToSell.value[0].name ? ticketsToSell.value[0] : undefined
)

const groupName = ref<string | undefined>(
  'group' in ticketsToSell.value[0] ? ticketsToSell.value[0].group : undefined
)
const group = computed(() => {
  if (!groupName.value) return []

  return options.value
    .filter(person => 'group' in person && person.group === groupName.value)
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .filter(person => person.id !== selected.value?.id)
    .sort((a, b) => a.name.localeCompare(b.name))
})

function checkPerson(e: any, person: typeof group.value[number]) {
  if (e.currentTarget.checked) {
    addTicketToSell({
      ...copyLastTicketToSell(),
      ...person
    })
  } else {
    removeTicketToSellById(person.id)
  }
}

const options = computed<Array<WithLabel<GsPerson>>>(() => {
  if (!ticket.value.ticketType) {
    return []
  }

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
    if ('group' in selected && selected.group) {
      groupName.value = selected.group
    } else {
      groupName.value = undefined
    }
    updateTicketToSellByIndex(0, selected)
    ticketsToSell.value.length = 1
  } else {
    groupName.value = undefined
    resetTicketsToSell()
    addTicketToSell({
      ...getDefaultTicket(),
      ticketType: 'program'
    })
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
      Wyszukaj <i>{{ searchFor[ticket.ticketType] }}</i>
    </div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      class="mb-8"
    />
  </div>

  <div class="card" v-if="groupName && selected">
    <div>
      Wybrano grupę: <b>{{ groupName }}</b> - Kto jeszcze przyszedł?
    </div>
    <div class="mb-3"></div>

    <div>
      <label
        v-for="person in group"
        :key="person.id"
        class="block cursor-pointer"
      >
        <template v-if="person.ticketType === 'program'">
          <input
            type="checkbox"
            :key="selected.id + '.' + person.id"
            @input="e => checkPerson(e, person)"
          />
          {{ person.name }} {{ person.nick ? `"${person.nick}" ` : ''
          }}{{ person.lastName }}
        </template>
      </label>
    </div>
  </div>

  <div class="card" v-if="selected && ticket.ticketType === 'volunteer'">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getVolunteerBadgeImage(ticket.volunteerType)"
      alt=""
    />
  </div>

  <div class="card" v-else-if="selected && ticket.ticketType">
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
