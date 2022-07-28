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
import { getTicketLabel, getBadgeImage } from '@/utils'
import TicketsToSellCounter from '../../components/global/TicketsToSellCounter.vue'

const selected = ref<WithLabel<GsProgram>>()

const groupName = ref<string | undefined>(
  ticketsToSell.value[0]
    ? (ticketsToSell.value[0] as GsProgram).group
    : undefined
)
const group = computed(() => {
  if (!groupName.value) return []

  return options.value
    .filter(person => 'group' in person && person.group === groupName.value)
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .filter(person => person.id !== selected.value?.id)
    .sort((a, b) => a.name.localeCompare(b.name))
})

function checkPersonInGroup(e: any, person: typeof group.value[number]) {
  if (e.currentTarget.checked) {
    addTicketToSell({
      ...copyLastTicketToSell(),
      ...person
    })
  } else {
    removeTicketToSellById(person.id)
  }
}

const options = computed<Array<WithLabel<GsProgram>>>(() => {
  if (!ticket.value.ticketType) {
    return []
  }

  return people.value.program
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .map(person => ({ label: getTicketLabel(person), ...person }))
    .sort((a, b) => a.label.localeCompare(b.label))
})

watch(selected, selected => {
  if (selected) {
    if (selected.group) {
      groupName.value = selected.group
    } else {
      groupName.value = undefined
    }
    updateTicketToSellByIndex(0, selected)
    ticketsToSell.value.length = 1
  } else {
    groupName.value = undefined
    resetTicketsToSell()
    addTicketToSell(getDefaultTicket('program'))
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
    <div class="mb-3">Wyszukaj <i>Twórcę Programu</i></div>
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
            @input="e => checkPersonInGroup(e, person)"
          />
          {{ person.name }} {{ person.nick ? `"${person.nick}" ` : ''
          }}{{ person.lastName }}
        </template>
      </label>
    </div>
  </div>

  <div class="card" v-if="selected && ticket.ticketType">
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
