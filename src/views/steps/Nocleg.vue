<script lang="ts" setup>
import { ticket } from '@/store'

let sleepValue: typeof ticket.value.sleep = '1'

if (ticket.value.personType === 'Wolontariusz') {
  sleepValue = 'SOSW'
}

if (ticket.value.personType === 'Wystawca') {
  sleepValue = 'B2'
}
</script>

<template>
  <div>
    Zapytaj osobę, czy chce nocować w <b>Sleep Roomie</b> lub na
    <b>Polu Namiotowym</b>
  </div>

  <label class="block">
    <input type="radio" name="sleep" value="nope" v-model="ticket.sleep" />
    Brak noclegu
  </label>

  <label class="block">
    <input
      type="radio"
      name="sleep"
      :value="sleepValue"
      v-model="ticket.sleep"
    />
    Sleep Room
  </label>

  <label class="block" v-if="ticket.personType !== 'Wystawca'">
    <input type="radio" name="sleep" value="PN" v-model="ticket.sleep" />
    Pole Namiotowe
  </label>

  <br />

  <div v-if="ticket.personType == 'Wolontariusz'">
    Poinformuj Wolontariusza, że nocleg mają w drugiej szkole
  </div>

  <div v-if="ticket.sleep !== 'nope'">
    Wydaj do podpisu <b>Kartę Noclegową</b>
  </div>

  <div v-if="ticket.sleep === 'nope'">
    Skreśl na identyfikatorze pole Sleep Room
    <img
      width="600"
      height="400"
      src="https://via.placeholder.com/600x400/cccccc/000000?text=indetyfikator+ze+skreslonym+sleep+roomem"
      alt=""
    />
  </div>

  <div v-if="ticket.sleep === '1'">
    Na identyfikatorze w polu Sleep Room wpisz "<b>1</b>"
    <img
      width="600"
      height="400"
      src="https://via.placeholder.com/600x400/cccccc/000000?text=indetyfikator+z+wpisanym+1+w+polu+sleep+room"
      alt=""
    />
  </div>

  <div v-if="ticket.sleep === 'SOSW'">
    Na identyfikatorze w polu Sleep Room wpisz "<b>SOSW</b>"
    <img
      width="600"
      height="400"
      src="https://via.placeholder.com/600x400/cccccc/000000?text=indetyfikator+z+wpisanym+SOSW+w+polu+sleep+room"
      alt=""
    />
  </div>

  <div v-if="ticket.sleep === 'PN'">
    Na identyfikatorze w polu Sleep Room narysuj "<b>△</b>"
    <img
      width="600"
      height="400"
      src="https://via.placeholder.com/600x400/cccccc/000000?text=indetyfikator+z+wpisanym+PN+w+polu+sleep+room"
      alt=""
    />
  </div>

  <div v-if="ticket.sleep === 'B2'">
    Na identyfikatorze w polu Sleep Room wpisz "<b>B2</b>"
    <img
      width="600"
      height="400"
      src="https://via.placeholder.com/600x400/cccccc/000000?text=indetyfikator+z+wpisanym+B2+w+polu+sleep+room"
      alt=""
    />
  </div>

  <Pagination :can-move-forward="!!ticket.sleep" />
</template>

<style lang="scss" scoped></style>
