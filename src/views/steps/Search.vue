<script lang="ts" setup>
import Pagination from '@/components/global/Pagination.vue'
import { RouteName } from '@/rotuer'
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
import type { GsPerson } from '@/types'
import {
  getBadgeImage,
  getTicketFirstLineLabel,
  getTicketSecondLineLabel,
  getVolunteerBadgeImage,
  replacePolishChars
} from '@/utils'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import TicketsToSellCounter from '../../components/global/TicketsToSellCounter.vue'

const selected = ref<GsPerson>()

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
    .filter(person => {
      // @ts-ignore
      if (person.tickets) {
        return (
          // @ts-ignore
          person.tickets >
          tickets.value.filter(ticket => ticket.id === person.id).length
        )
      }
      return !tickets.value.some(ticket => ticket.id === person.id)
    })
    .map(person => ({
      labelFirstLine: getTicketFirstLineLabel(person),
      labelSecondLine: getTicketSecondLineLabel(person),
      label: getTicketFirstLineLabel(person),
      ...person
    }))
    .sort((a, b) => a.labelFirstLine.localeCompare(b.labelFirstLine))
})

watch(selected, selected => {
  resetTicketsToSell()
  if (selected) {
    addTicketToSell(getDefaultTicket(selected.ticketType))
    updateTicketToSellByIndex(0, selected)
    ticketsToSell.value.length = 1
  } else {
    addTicketToSell(getDefaultTicket('normal'))
  }
})

const vselect = ref()
onMounted(() => {
  resetTicketsToSell()
  if (!ticket.value.name) {
    vselect.value.searchEl.focus()
  }
})

const router = useRouter()

function search(opts: typeof options.value, query: string) {
  return opts.filter(option =>
    replacePolishChars(
      (option.labelFirstLine + option.labelSecondLine).toLowerCase()
    ).includes(replacePolishChars(query.toLowerCase()))
  )
}

const multiTicket = ref(1)
const soldTickets = computed(
  () => tickets.value.filter(ticket => ticket.id === selected.value?.id).length
)

watch(multiTicket, () => {
  if (selected.value) {
    resetTicketsToSell()
    for (let i = 0; i < multiTicket.value; i++) {
      addTicketToSell(selected.value)
    }
  }
})
</script>

<template>
  <div class="card">
    <div class="mb-3">
      Wyszukaj: Imię / Nazwisko / Pseudonim / Firma / Nazwa
    </div>
    <v-select
      ref="vselect"
      :options="options"
      v-model="selected"
      :filter="search"
    >
      <template v-slot:option="option">
        <div class="pb-2">
          <div>
            {{ option.labelFirstLine }}
          </div>
          <div class="text-sm text-gray-700 trim">
            {{ option.labelSecondLine.slice(0, 90) }}
          </div>
        </div>
      </template>
    </v-select>

    <div class="h-10">
      <div v-if="selected" class="mt-1 ml-2 text-grey-500 text-sm">
        {{ getTicketSecondLineLabel(selected) }}
      </div>
    </div>
  </div>

  <div
    v-if="
      ticket.ticketType !== 'program' &&
      ticket.ticketType !== 'volunteer' &&
      ticket.ticketType !== 'normal' &&
      ticket.tickets > 1 &&
      ticket.tickets - soldTickets > 0
    "
  >
    <Counter
      label="Ile wejściówek do wydania?"
      v-model="multiTicket"
      :min="1"
      :max="ticket.tickets === soldTickets ? 100 : ticket.tickets - soldTickets"
    />
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
