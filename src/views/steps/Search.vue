<script lang="ts" setup>
import Pagination from '@/components/global/Pagination.vue'
import { RouteName } from '@/rotuer'
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
import type { GsPerson, GsProgram } from '@/types'
import {
  getBadgeImage,
  getTicketFirstLineLabel,
  getTicketSecondLineLabel,
  getVolunteerBadgeImage
} from '@/utils'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import TicketsToSellCounter from '../../components/global/TicketsToSellCounter.vue'

const selected = ref<GsPerson>()

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

const options = computed(() => {
  return [
    ...people.value.program,
    ...people.value.guests,
    ...people.value.volunteers,
    ...people.value.media,
    ...people.value.others,
    ...people.value.vendors,
    ...people.value.workers,
    ...people.value.vip
  ]
    .filter(person => !tickets.value.some(ticket => ticket.id === person.id))
    .map(person => ({
      labelFirstLine: getTicketFirstLineLabel(person),
      labelSecondLine: getTicketSecondLineLabel(person),
      label: getTicketFirstLineLabel(person),
      ...person
    }))
    .sort((a, b) => a.labelFirstLine.localeCompare(b.labelFirstLine))
})

watch(selected, selected => {
  if (selected) {
    if (selected.ticketType === 'program' && selected.group) {
      groupName.value = selected.group
    } else {
      groupName.value = undefined
    }
    updateTicketToSellByIndex(0, selected)
    ticketsToSell.value.length = 1
  } else {
    groupName.value = undefined
    resetTicketsToSell()
    addTicketToSell(getDefaultTicket('normal'))
  }
})

const vselect = ref()
onMounted(() => {
  if (!ticket.value.name) {
    vselect.value.searchEl.focus()
  }
})

const router = useRouter()
</script>

<template>
  <div class="card">
    <div class="mb-3">
      Wyszukaj: Imię / Nazwisko / Pseudonim / Firma / Nazwa
    </div>
    <v-select ref="vselect" :options="options" v-model="selected" class="mb-8">
      <template v-slot:option="option">
        <div class="pb-2">
          <div>
            {{ option.labelFirstLine }}
          </div>
          <div class="text-sm text-gray-700">{{ option.labelSecondLine }}</div>
        </div>
      </template>
    </v-select>
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
      :src="
        selected.ticketType === 'volunteer'
          ? getVolunteerBadgeImage(selected.volunteerType)
          : getBadgeImage(selected.ticketType)
      "
      alt=""
    />
  </div>

  <Pagination
    :can-move-forward="!!selected"
    @next="
      () => {
        if (!selected) return
        switch (selected?.ticketType) {
          case 'program':
          case 'volunteer':
          case 'others':
            router.push({ name: RouteName.Wiek })
            break
          default:
            router.push({ name: RouteName.Platnosc })
        }
      }
    "
    @prev="router.push({ name: RouteName.Akredytacja })"
  />
</template>

<style scoped>
:deep() {
  --vs-search-input-color: #505050;
  --vs-dropdown-option--active-bg: #e6e6e6;
  --vs-dropdown-option--active-color: black;
}
</style>
