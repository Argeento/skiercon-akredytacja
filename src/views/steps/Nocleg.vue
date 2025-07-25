<script lang="ts" setup>
import { RouteName } from '@/rotuer'
import {
  ticketsToSell,
  updateAllTicketsToSell,
  updateTicketToSellByIndex
} from '@/store'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const sleepCounter = ref(ticketsToSell.value.filter(t => t.sleep).length)

watch(sleepCounter, counter => {
  updateAllTicketsToSell({ sleep: false })
  for (let i = 0; i < counter; i++) {
    updateTicketToSellByIndex(i, { sleep: true })
  }
})

const router = useRouter()
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

  <div v-if="sleepCounter && ticketsToSell[0].ticketType !== 'volunteer'" class="card">
    <div>
      Przygotuj opaskę na rękę <b>x{{ sleepCounter }}</b>
    </div>
  </div>

  <Pagination
    @next="router.push({ name: RouteName.Platnosc })"
    @prev="
      () => {
        switch (ticketsToSell[0].ticketType) {
          case 'normal':
          case 'program':
          case 'volunteer':
          case 'others':
            router.push({ name: RouteName.Wiek })
            break
          default:
            router.push({ name: RouteName.Akredytacja })
        }
      }
    "
  />
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
