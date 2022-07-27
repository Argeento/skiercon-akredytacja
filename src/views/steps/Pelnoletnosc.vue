<script setup lang="ts">
import { ticket } from '@/store'
import { getPersonVariation, getBadgeImage } from '@/utils'
</script>

<template>
  <Counter
    v-if="ticket.ticketType === 'normal'"
    :min="1"
    v-model="ticket.numberOfIds"
    label="Liczba wejściówek:"
  />

  <div class="card">
    <div class="mb-3">
      Zweryfikuj wiek <i>{{ getPersonVariation(ticket.ticketType) }}</i>
    </div>

    <div class="mb-3">
      Osoba w wieku <b>13-18</b> musi posiadać
      <b v-if="ticket.ticketType === 'volunteer'"
        >Kartę Młodego Wolontariusza</b
      >
      <b v-else>Kartę Młodego Skierconauty</b>
    </div>

    <div v-if="ticket.ticketType === 'normal'">
      Osoba <b>poniżej 13</b> roku życia musi być <b>z opiekunem</b>
    </div>
  </div>

  <div class="card" v-if="ticket.ticketType && ticket.ticketType === 'normal'">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getBadgeImage(ticket.ticketType)"
      alt=""
    />
  </div>

  <Pagination />
</template>
