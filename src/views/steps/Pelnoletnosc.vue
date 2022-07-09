<script setup lang="ts">
import { accreditation } from '@/store'
accreditation.value.age = '18+'
</script>

<template>
  <div>Zweryfikuj wiek uczestnika</div>

  <label class="block">
    <input
      type="radio"
      checked
      name="age"
      value="18+"
      v-model="accreditation.age"
    />
    Osoba jest pełnoletnia
  </label>

  <label class="block">
    <input type="radio" name="age" value="13-18" v-model="accreditation.age" />
    Osoba ma 13-18 lat i posiada <b>Kartę Młodego Skierconauty</b>
  </label>

  <label class="block" v-if="accreditation.personType === 'Uczestnik'">
    <input type="radio" name="age" value="13-" v-model="accreditation.age" />
    Osoba ma poniżej 13 lat i jest z opiekunem
  </label>

  <Pagination prev-text="Anuluj akredytację" />
</template>

<style lang="scss" scoped></style>
