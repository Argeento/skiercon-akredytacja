<script lang="ts" setup>
import { ticket, ticketsToSell } from '@/store'
import { computed, ref } from 'vue'
const TICKET_PRICE = new Date().getDay() === 0 ? 30 : 69
const SLEEP_PRICE = 5
const children = ref(0)

const totalPrice = computed(
  () =>
    ticketsToSell.value.reduce((acc, ticket) => {
      let price = TICKET_PRICE
      if ('discount' in ticket) {
        if (ticket.discount === '100%') price = 0
        if (ticket.discount === '75%') price = TICKET_PRICE === 30 ? 7 : 17
        if (ticket.discount === '50%') price = TICKET_PRICE === 30 ? 15 : 34
        if (ticket.discount === '25%') price = TICKET_PRICE === 30 ? 22 : 51
      }
      if (ticket.sleep) {
        // @ts-ignore
        price += ticket.discount === '100%' ? 0 : SLEEP_PRICE
      }
      return acc + price
    }, 0) -
    children.value * TICKET_PRICE
)

const sleeps = computed(() => ticketsToSell.value.filter(t => t.sleep).length)
</script>

<template>
  <Counter
    v-if="ticket.ticketType === 'normal' && ticketsToSell.length > 1"
    v-model="children"
    :min="0"
    :max="ticketsToSell.length - 1"
    label="Liczba dzieci poniżej 7 roku życia:"
  />

  <template v-if="ticket.ticketType === 'normal'">
    <div v-if="ticket.numberOfIds > 1" class="card">
      <div class="mb-3">Przyjmij opłatę za konwent:</div>
      <div class="mb-3">
        <div>
          <b>{{ ticket.numberOfIds - children }}x</b>
          Wejściówka normalna ({{ TICKET_PRICE }}zł) - {{ totalPrice }}zł
        </div>
        <div v-if="children > 0">
          <b>{{ children }}x</b> Dziecko poniżej 7 roku życia (0zł) - 0zł
        </div>
      </div>
    </div>
  </template>

  <div class="card">
    <div class="mb-3" v-if="totalPrice > 0">
      Przyjmij opłatę za konwent <b>{{ totalPrice }}zł</b>
    </div>
    <div class="mb-3" v-else>Bezpłatne wejście na konwent</div>
  </div>

  <div v-if="ticket.ticketType === 'volunteer'">
    <div class="card">
      Poinformuj <i>Wolontariusza</i> o tym, żeby zgłosił się do
      "<b>Leśniczówki</b>" (korytarz na lewo i&nbsp;do samego końca)
    </div>

    <div v-if="ticket.sleep" class="card">
      Poinformuj <i>Wolontariusza</i>, że nocleg ma w <b>Mechaniku</b>
    </div>
  </div>

  <div v-if="ticket.ticketType === 'guest'">
    <div v-if="ticket.giftPack" class="card">Wydaj <b>Pakiet Gościa</b></div>
    <div v-if="ticket.giftPack" class="card">
      <div class="mb-3">
        Poinformuj <i>Gościa</i>, że na odwrocie identyfikatora znajdują się
        numery telefonów do&nbsp;<i>Koordynatorów Gości</i>
      </div>

      <div>
        W kwestii noclegu lub ewentualnego rozliczenia dojazdu należy
        skontaktować się&nbsp;z&nbsp;odpowiednim <i>Koordynatorem</i>
      </div>

      <div class="relative">
        <div class="phones-mark rounded-xl absolute border-6 border-red-400" />
        <img src="/img/gosc-back.png" class="badge-image" alt="" />
      </div>
    </div>
  </div>

  <div v-if="ticket.ticketType === 'vendor'">
    <div class="card">Poinformuj <i>Wystawcę</i>, gdzie ma stoisko</div>
    <div class="card">
      Poinformuj <i>Wystawcę</i>, że do stoiska wkrótce podejdzie
      <i>Organizator</i> w sprawie rozliczenia i&nbsp;podpisania umowy
    </div>
  </div>

  <div class="card">
    <div class="my-2">
      <b>Wydaj identyfikator</b> <TicketsToSellCounter />

      (zapytaj, czy potrzebna jest smycz lub folia do identyfikatora)
    </div>
    <div v-if="sleeps > 0" class="my-2">
      <b>Załóż {{ sleeps > 1 ? 'opaski' : 'opaskę' }} na rękę</b>
      <b v-if="sleeps > 1"> (x{{ sleeps }})</b>
    </div>
  </div>

  <Pagination next-text="Zakończ akredytację" end />
</template>

<style lang="scss" scoped>
.phones-mark {
  width: 185px;
  height: 62px;
  top: 51px;
  left: 12px;
}

.meals-mark {
  width: 95px;
  height: 160px;
  top: 100px;
  left: 340px;
}
</style>
