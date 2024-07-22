<script lang="ts" setup>
import {
  ticketsToSell,
  updateAllTicketsToSell,
  updateTicketToSellByIndex
} from '@/store'
import { ref, watch } from 'vue'

const sleepCounter = ref(ticketsToSell.value.filter(t => t.sleep).length)

watch(sleepCounter, counter => {
  updateAllTicketsToSell({ sleep: false })
  for (let i = 0; i < counter; i++) {
    updateTicketToSellByIndex(i, { sleep: true })
  }
})
</script>

<template>
  <div class="card">
    <div class="">Zapytaj o nocleg</div>
  </div>

  <Counter
    v-model="sleepCounter"
    :min="0"
    :max="ticketsToSell.length"
    label="Liczba sleepów:"
  />

  <div v-if="sleepCounter" class="card">
    <div>
      Przygotuj opaskę na rękę <b>x{{ sleepCounter }}</b>
    </div>
  </div>

  <Pagination />
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
