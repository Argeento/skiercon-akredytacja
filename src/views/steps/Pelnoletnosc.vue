<script setup lang="ts">
import { ticket } from '@/store'
import { getPersonVariation, getBadgeImage } from '@/utils'
</script>

<template>
  <Counter
    v-if="ticket.personType === 'Uczestnik'"
    :min="1"
    v-model="ticket.numberOfIds"
    label="Liczba wejściówek:"
  />

  <div class="card">
    <div class="mb-3">
      Zweryfikuj wiek <i>{{ getPersonVariation(ticket.personType!) }}</i>
    </div>

    <div class="mb-3">
      Osoba w wieku <b>13-18</b> musi posiadać <b>Kartę Młodego Skierkonauty</b>
    </div>

    <div v-if="ticket.personType === 'Uczestnik'">
      Osoba <b>poniżej 13</b> roku życia musi być <b>z opiekunem</b>
    </div>
  </div>

  <div class="card">
    <div class="mb-4">Przygotuj odpowiedni identyfikator:</div>

    <img
      class="badge-image shadow mb-5"
      :src="getBadgeImage(ticket.personType!)"
      alt=""
    />
  </div>

  <Pagination />
</template>
