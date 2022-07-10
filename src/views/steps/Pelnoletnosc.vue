<script setup lang="ts">
import { ticket } from '@/store'
ticket.value.age = '18+'
</script>

<template>
  <div>Zweryfikuj wiek uczestnika</div>

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

  <Pagination prev-text="Anuluj akredytację" />
</template>

<style lang="scss" scoped></style>
