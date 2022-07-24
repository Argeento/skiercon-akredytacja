<script lang="ts" setup>
import { ticket } from '@/store'
import { onMounted, ref } from 'vue'
import { getVolunteerBadgeImage } from '@/utils'

const options = ref<any[]>([])
const selected = ref<Volunteer & { label: string }>()

if (ticket.value.ticketType === 'Gość') {
  options.value = []
}

if (ticket.value.ticketType === 'Twórca Programu') {
  options.value = ['Twórca 1', 'Twórca 2'].sort()
}

if (ticket.value.ticketType === 'Wolontariusz') {
}

const searchFor: Partial<Record<TicketType, string>> = {
  'Twórca Programu': 'Twórcę Programu',
  Gość: 'Gościa',
  Wolontariusz: 'Wolontariusza'
}

const vselect = ref()
onMounted(() => {
  if (!ticket.value.personName) {
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

  <Pagination :can-move-forward="!!ticket.personName" />
</template>

<style lang="scss" scoped></style>
