<script setup lang="ts">
import { ticket } from '@/store'
import { getPersonVariation } from '@/utils'
</script>

<template>
  <div class="card">
    <div class="mb-3">
      Zweryfikuj wiek <i>{{ getPersonVariation(ticket.personType!) }}</i>
    </div>

    <label class="block">
      <input type="radio" checked name="age" value="18+" v-model="ticket.age" />
      Osoba jest pełnoletnia
    </label>

    <label class="block">
      <input type="radio" name="age" value="13-18" v-model="ticket.age" />
      Osoba ma 13-18 lat i posiada <b>Kartę Młodego Skierconauty</b>
    </label>

    <label class="block" v-if="ticket.personType === 'Uczestnik'">
      <input type="radio" name="age" value="13-" v-model="ticket.age" />
      Osoba ma poniżej 13 lat i jest z opiekunem
    </label>
  </div>

  <Pagination />
</template>

<style lang="scss" scoped></style>
