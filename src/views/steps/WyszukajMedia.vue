<script lang="ts" setup>
import { ticket } from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import TicketsTable from '../../components/TicketsTable.vue'

// v-select
const vselect = ref()
onMounted(() => {
  if (!ticket.value.mediaName) {
    vselect.value.searchEl.focus()
  }
})

// select
const medium = ref()
const ticketsByMedium = ref<Ticket[]>([])
watch(medium, async () => {})

const isLimit = computed(() => {
  return ticketsByMedium.value.length >= (medium.value?.tickets ?? Infinity)
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Wyszukaj <i>Media</i></div>
    <v-select class="mb-6" ref="vselect" v-model="medium" />
  </div>

  <TicketsTable
    v-if="medium && ticketsByMedium.length > 0"
    :tickets="ticketsByMedium"
    without-remove
  >
    <span :class="{ 'text-red-600 bold': isLimit }">
      Wykorzystano już {{ ticketsByMedium.length }} z
      {{ medium.tickets }} wejściówek:
    </span>
  </TicketsTable>

  <Pagination :can-move-forward="!!ticket.mediaName && !isLimit" />
</template>

<style lang="scss" scoped></style>
