<script lang="ts" setup>
import { computed, ref, watch, type PropType } from 'vue'
import TicketRow from './TicketRow.vue'
import { chunk } from 'lodash-es'

const props = defineProps({
  tickets: {
    type: Array as PropType<TicketOutput[]>,
    required: true
  },
  title: {
    type: String as PropType<string | undefined>,
    default: undefined
  },
  withoutRemove: {
    type: Boolean,
    default: false
  }
})

const itemsPerPage = ref(10)
const currentPage = ref(1)
const searchString = ref()

watch(itemsPerPage, number => {
  if (number < 1) itemsPerPage.value = 1
  if (number > 100) itemsPerPage.value = 100
})

const filteredTickets = computed(() => {
  return props.tickets
    .filter(ticket => {
      if (ticketTypeFilter.value === 'all') return true
      return ticket.ticketType === ticketTypeFilter.value
    })
    .filter(ticket => {
      if (searchString.value) {
        // @ts-ignore
        return ('' + ticket.name + ticket.nick ?? '' + ticket.lastName ?? '')
          .toLocaleLowerCase()
          .includes(searchString.value.toLocaleLowerCase())
      } else {
        return true
      }
    })
})

const pages = computed(() => chunk(filteredTickets.value, itemsPerPage.value))
const currentTickets = computed(() => pages.value[currentPage.value - 1] ?? [])

const ticketTypeFilter = ref<TicketType | 'all'>('all')
const ticketTypeOptions: { label: string; value: TicketType | 'all' }[] = [
  { value: 'all', label: 'Wszyscy' },
  { value: 'guest', label: 'Goście' },
  { value: 'medium', label: 'Media' },
  { value: 'normal', label: 'Uczestnicy' },
  { value: 'program', label: 'Twórcy programu' },
  { value: 'vendor', label: 'Wystawcy' },
  { value: 'volunteer', label: 'Wolontariusze' }
]

watch(ticketTypeFilter, () => (currentPage.value = 1))
watch(itemsPerPage, () => (currentPage.value = 1))

function onPageHandler(page: number) {
  currentPage.value = page
}
</script>

<template>
  <div class="my-6">
    <div v-if="$slots.default" class="px-10 py-6">
      <slot></slot>
    </div>
    <header class="shadow rounded-xl p-5 flex mb-5">
      <label class="w-52 mr-5">
        Typ biletu
        <select v-model="ticketTypeFilter" class="input">
          <option
            v-for="option in ticketTypeOptions"
            :key="option.value"
            :value="option.value"
            v-text="option.label"
          />
        </select>
      </label>

      <label class="w-52 mr-5">
        Liczba biletów na stronę
        <input type="number" v-model="itemsPerPage" class="input" />
      </label>

      <label class="w-72 mr-5">
        Szukaj
        <input
          type="search"
          v-model="searchString"
          class="input"
          placeholder="Imię / Nazwisko / Nick / Nazwa"
        />
      </label>
    </header>
    <table
      v-if="currentTickets.length > 0"
      class="w-full shadow rounded-xl overflow-hidden"
    >
      <tr>
        <th width="180">Typ</th>
        <th>Osoba / Nazwa</th>
        <th width="180">Nocleg</th>
        <th width="150">Data</th>
        <th v-if="!withoutRemove" width="50">Usuń</th>
      </tr>
      <TicketRow
        v-for="ticket in currentTickets"
        :key="ticket.docId"
        :ticket="ticket"
        :without-remove="withoutRemove"
      />
    </table>

    <div
      v-else
      class="w-full shadow rounded-xl overflow-hidden text-center text-xl p-32"
    >
      Brak biletów
    </div>

    <vue-awesome-paginate
      v-if="filteredTickets.length > itemsPerPage"
      :key="currentPage"
      class="m-10 justify-center"
      :total-items="filteredTickets.length"
      :items-per-page="itemsPerPage"
      :max-pages-shown="5"
      :current-page="currentPage"
      :on-click="onPageHandler"
    />
  </div>
</template>

<style lang="scss scoped"></style>
