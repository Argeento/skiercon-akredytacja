<script lang="ts" setup>
import { ticket } from '@/store'
import { computed, ref } from 'vue'
const ticketPrice = new Date().getDay() === 0 ? 20 : 40
const children = ref(0)
const totalPrice = computed(
  () => ticketPrice * (ticket.value.numberOfIds - children.value)
)
</script>

<template>
  <Counter
    v-if="ticket.ticketType === 'normal' && ticket.numberOfIds > 1"
    v-model="children"
    :min="0"
    :max="ticket.numberOfIds - 1"
    label="Liczba dzieci poniżej 10 roku życia:"
  />

  <template v-if="ticket.ticketType === 'normal'">
    <div v-if="ticket.numberOfIds > 1" class="card">
      <div class="mb-3">Przyjmij opłatę za konwent:</div>
      <div class="mb-3">
        <div>
          <b>{{ ticket.numberOfIds - children }}x</b>
          Wejściówka normalna ({{ ticketPrice }}zł) - {{ totalPrice }}zł
        </div>
        <div v-if="children > 0">
          <b>{{ children }}x</b> Dziecko poniżej 10 roku życia (0zł) - 0zł
        </div>
      </div>
      <div>
        Razem do zapłaty: <b>{{ totalPrice }}zł</b>
      </div>
    </div>

    <div v-else class="card">
      <div class="mb-3">
        Przyjmij opłatę za konwent <b>{{ totalPrice }}zł</b>
      </div>
    </div>
  </template>

  <div v-if="ticket.ticketType === 'volunteer'">
    <div v-if="ticket.discount === '50%'" class="mb-3">
      Przyjmij opłatę za konwent <b>20ł</b>
    </div>
    <div class="card">
      Poinformuj <i>Wolontariusza</i> o tym, żeby zgłosił się do
      "<b>Leśniczówki</b>" (sala A8)
    </div>
  </div>

  <div v-if="ticket.ticketType === 'guest'">
    <div v-if="ticket.giftPack" class="card">
      Wydaj <b>Pakiet Gościa</b> (Kubek)
    </div>
    <div v-if="ticket.giftPack" class="card">
      <div class="mb-3">
        Poinformuj <i>Gościa</i>, że na odwrocie identyfikatora znajdują się
        numery telefonów do&nbsp;Koordynatorów Gości
      </div>

      <div>
        W kwestii noclegu lub ewentualnego rozliczenia dojazdu należy
        skontaktować się&nbsp;z&nbsp;odpowiednim koordynatorem
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
    <b
      >Wydaj
      <template v-if="'tickets' in ticket">{{ ticket.tickets }}x</template>
      identyfikator</b
    >
    (zapytaj, czy potrzebna jest smycz lub folia do identyfikatora)
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
