<script lang="ts" setup>
import { ticket, ticketsToSell, updateAllTicketsToSell } from '@/store'
import { getBadgeRevers, sleepMap } from '@/utils'
import { computed, ref, watch } from 'vue'

let sleepValue: Sleep = '1'

if (ticket.value.ticketType === 'volunteer') {
  sleepValue = 'SOSW'
}

if (ticket.value.ticketType === 'vendor') {
  sleepValue = 'B2'
}

const reverseSrc = getBadgeRevers(ticket.value.ticketType)
const mark = computed(() => sleepMap[ticket.value.sleep])
const select = ref<Sleep>('nope')

watch(select, select => {
  updateAllTicketsToSell({
    sleep: select
  })
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Zapytaj o nocleg i zaznacz odpowiednią opcję</div>

    <div class="mb-3">
      <label
        class="block cursor-pointer"
        :class="select === 'nope' && 'font-bold'"
      >
        <input type="radio" name="sleep" value="nope" v-model="select" />
        Brak noclegu
      </label>

      <label
        class="block cursor-pointer"
        :class="select === sleepValue && 'font-bold'"
      >
        <input type="radio" name="sleep" :value="sleepValue" v-model="select" />
        Sleep Room
      </label>

      <label
        class="block cursor-pointer"
        :class="select === 'PN' && 'font-bold'"
        v-if="ticket.ticketType !== 'vendor'"
      >
        <input type="radio" name="sleep" value="PN" v-model="select" />
        Pole Namiotowe
      </label>
    </div>
  </div>

  <div
    v-if="ticket.ticketType == 'volunteer' && select === 'SOSW'"
    class="card"
  >
    Poinformuj <i>Wolontariusza</i>, że nocleg mają w <b>Drugiej Szkole</b>
  </div>

  <div v-if="select && select !== 'nope' && select !== 'SOSW'" class="card">
    <div>
      Dla każdej osoby powyżej 12 roku życia, wydaj do podpisu
      <b>Kartę Noclegową</b>
    </div>

    <span class="text-red-600">Karta ma wrócić na akredytację!</span>
  </div>

  <div v-if="select" class="card">
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
            ticket.ticketType === 'volunteer' && select === 'SOSW'
        }"
      >
        {{ mark }}
      </div>
      <img class="badge-img" :src="reverseSrc" alt="" />
    </div>
  </div>

  <Pagination :can-move-forward="!!select" />
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
