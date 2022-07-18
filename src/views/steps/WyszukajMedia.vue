<script lang="ts" setup>
import { api } from '@/db'
import { ticket } from '@/store'
import { orderBy, where } from 'firebase/firestore/lite'
import { computed, onMounted, ref, watch } from 'vue'
import TicketsTable from '../../components/TicketsTable.vue'

// Fetch
const loading = ref(true)
const media = ref<Media[]>([])
async function fetchMedia() {
  media.value = await api.getCollection<Media>('media', [
    orderBy('name', 'asc')
  ])
  loading.value = false
}
fetchMedia()

// v-select
const vselect = ref()
onMounted(() => {
  if (!ticket.value.mediaName) {
    vselect.value.searchEl.focus()
  }
})

// select
const medium = ref<Media>()
const ticketsByMedium = ref<Ticket[]>([])
watch(medium, async () => {
  ticket.value.mediaName = medium.value?.name
  ticket.value.mediaId = medium.value?.id

  if (medium.value) {
    const tickets = await api.getCollection<Ticket>('tickets', [
      orderBy('ticketEndTime', 'desc'),
      where('mediaId', '==', medium.value.id)
    ])

    ticketsByMedium.value = tickets
  } else {
    ticketsByMedium.value = []
  }
})

const isLimit = computed(() => {
  return ticketsByMedium.value.length >= (medium.value?.tickets ?? Infinity)
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Wyszukaj <i>Media</i></div>
    <v-select
      class="mb-6"
      ref="vselect"
      :options="media.map(x => ({ label: x.name, ...x }))"
      v-model="medium"
    />
  </div>

  <TicketsTable
    v-if="medium && ticketsByMedium.length > 0"
    :tickets="ticketsByMedium"
  >
    <span :class="{ 'text-red-600 bold': isLimit }">
      Wykorzystano już {{ ticketsByMedium.length }} z
      {{ medium.tickets }} wejściówek:
    </span>
  </TicketsTable>

  <Pagination :can-move-forward="!!ticket.mediaName && !isLimit" />
</template>

<style lang="scss" scoped></style>
