<script lang="ts" setup>
import { ticket, type Sleep } from '@/store'
import { getPlakietkaRevers } from '@/utils'
import { computed } from 'vue'

let sleepValue: Sleep = '1'

if (ticket.value.personType === 'Wolontariusz') {
  sleepValue = 'SOSW'
}

if (ticket.value.personType === 'Wystawca') {
  sleepValue = 'B2'
}

const reverseSrc = getPlakietkaRevers(ticket.value.personType!)
const markMap: Record<Sleep, string> = {
  '1': '1',
  B2: 'B2',
  PN: 'P',
  SOSW: 'SOSW',
  nope: 'X'
}

const mark = computed(() => {
  return markMap[ticket.value.sleep!]
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Zapytaj o nocleg</div>

    <div class="mb-3">
      <label
        class="block cursor-pointer"
        :class="ticket.sleep === 'nope' && 'font-bold'"
      >
        <input type="radio" name="sleep" value="nope" v-model="ticket.sleep" />
        Brak noclegu
      </label>

      <label
        class="block cursor-pointer"
        :class="ticket.sleep === sleepValue && 'font-bold'"
      >
        <input
          type="radio"
          name="sleep"
          :value="sleepValue"
          v-model="ticket.sleep"
        />
        Sleep Room
      </label>

      <label
        class="block cursor-pointer"
        :class="ticket.sleep === 'PN' && 'font-bold'"
        v-if="ticket.personType !== 'Wystawca'"
      >
        <input type="radio" name="sleep" value="PN" v-model="ticket.sleep" />
        Pole Namiotowe
      </label>
    </div>
  </div>

  <div
    v-if="ticket.personType == 'Wolontariusz' && ticket.sleep === 'SOSW'"
    class="card"
  >
    Poinformuj <i>Wolontariusza</i>, że nocleg mają w <b>Drugiej Szkole</b>
  </div>

  <div v-if="ticket.sleep && ticket.sleep !== 'nope'" class="card">
    Wydaj do podpisu <b>Kartę Noclegową</b> <br />
    <span class="text-red-600"> Karta ma wrócić na akredytację! </span>
  </div>

  <div v-if="ticket.sleep" class="card">
    <div>
      Na identyfikatorze w polu <b>MIEJSCE NA SLEEP ROOMIE</b> wpisz "<b>
        {{ mark }} </b
      >"
    </div>

    <div class="badge-wrap">
      <div
        class="badge-mark"
        :class="{
          'badge-mark--program': ticket.personType === 'Twórca Programu',
          'badge-mark--volunteer': ticket.personType === 'Wolontariusz',
          'badge-mark--small':
            ticket.personType === 'Wolontariusz' && ticket.sleep === 'SOSW'
        }"
      >
        {{ mark }}
      </div>
      <img class="badge-img" :src="reverseSrc" alt="" />
    </div>
  </div>

  <Pagination :can-move-forward="!!ticket.sleep" />
</template>

<style lang="scss" scoped>
.badge-wrap {
  position: relative;
  width: 450px;
}

.badge-mark {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 110px;
  right: 33px;
  font-size: 40px;
  text-align: center;
  @apply text-red-500;
  font-family: Arial, Helvetica, sans-serif;

  &--program {
    top: 43px;
    right: 48px;
  }

  &--volunteer {
    top: 43px;
  }

  &--small {
    font-size: 14px;
    line-height: 55px;
  }
}
</style>
