<script lang="ts" setup>
import { ticket } from '@/store'
import { getBadgeRevers, sleepMap } from '@/utils'
import { computed } from 'vue'

let sleepValue: Sleep = '1'

if (ticket.value.ticketType === 'volunteer') {
  sleepValue = 'SOSW'
}

if (ticket.value.ticketType === 'vendor') {
  sleepValue = 'B2'
}

const reverseSrc = getBadgeRevers(ticket.value.ticketType)

const mark = computed(() => sleepMap[ticket.value.sleep])
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
        v-if="ticket.ticketType !== 'vendor'"
      >
        <input type="radio" name="sleep" value="PN" v-model="ticket.sleep" />
        Pole Namiotowe
      </label>
    </div>
  </div>

  <div
    v-if="ticket.ticketType == 'volunteer' && ticket.sleep === 'SOSW'"
    class="card"
  >
    Poinformuj <i>Wolontariusza</i>, że nocleg mają w <b>Drugiej Szkole</b>
  </div>

  <div
    v-if="ticket.sleep && ticket.sleep !== 'nope' && ticket.sleep !== 'SOSW'"
    class="card"
  >
    <div v-if="ticket.numberOfIds > 1">
      Dla każdej osoby powyżej 12 roku życia, wydaj do podpisu
      <b>Kartę Noclegową</b>
    </div>
    <div v-else>Wydaj do podpisu <b>Kartę Noclegową</b></div>
    <span class="text-red-600">Karta ma wrócić na akredytację!</span>
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
          'badge-mark--program': ticket.ticketType === 'program',
          'badge-mark--volunteer': ticket.ticketType === 'volunteer',
          'badge-mark--small':
            ticket.ticketType === 'volunteer' && ticket.sleep === 'SOSW'
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
