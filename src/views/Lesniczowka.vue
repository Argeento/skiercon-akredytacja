<script lang="ts" setup>
import { tickets } from '@/store'
import dayjs from 'dayjs'
import { computed } from 'vue'

const volunteers = computed(() =>
  tickets.value.filter(ticket => {
    return ticket.ticketType === 'volunteer'
  })
)
</script>

<template>
  <div class="p-10">
    <table class="w-full shadow rounded-xl overflow-hidden">
      <tr>
        <th>Imię i Nazwisko</th>
        <th>Nick</th>
        <th>Typ</th>
        <th>Akredytacja</th>
      </tr>
      <tr v-for="volunteer in volunteers" :key="volunteer.id">
        <template v-if="volunteer.ticketType === 'volunteer'">
          <td>{{ volunteer.name }} {{ volunteer.lastName }}</td>
          <td>{{ volunteer.nick ?? '-' }}</td>
          <td>{{ volunteer.volunteerType }}</td>
          <td>{{ dayjs(volunteer.ticketEndTime).format('dd, HH:mm') }}</td>
        </template>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
