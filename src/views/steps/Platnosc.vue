<script lang="ts" setup>
import { ticket } from '@/store'
const ticketPrice = new Date().getDay() === 0 ? 20 : 40
</script>

<template>
  <div class="card" v-if="ticket.personType === 'Uczestnik'">
    <div class="">
      Przyjmij opłatę za konwent <b>{{ ticketPrice }}zł</b>
    </div>
    <div class="text-red-500" v-if="ticket.personType === 'Uczestnik'">
      Dzieci do 10 roku życia wchodzą za darmo!
    </div>
  </div>

  <div v-if="ticket.personType === 'Wolontariusz'">
    <div class="card">
      Poinformuj <i>Wolontariusza</i> o tym, żeby zgłosił się do
      "<b>Leśniczówki</b>"
    </div>
    <div class="card">
      Poinformuj <i>Wolontariusza</i>, że przysługują mu
      <b>2 ciepłe posiłki</b> odhaczane na tyle identyfikatora

      <div class="relative">
        <div class="meals-mark rounded-xl absolute border-4 border-red-400" />
        <img
          class="badge-reverse"
          src="/skiercon-akredytacja/img/szop-lis-dzik-back.png"
          alt=""
        />
      </div>
    </div>
  </div>

  <div v-if="ticket.personType === 'Gość'">
    <div class="card">Wydaj <b>Pakiet Gościa</b> (Kubek)</div>
    <div class="card">
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
        <img
          src="/skiercon-akredytacja/img/gosc-back.png"
          class="badge-reverse"
          alt=""
        />
      </div>
    </div>
  </div>

  <div v-if="ticket.personType === 'Wystawca'">
    <div class="card">Poinformuj <i>Wystawcę</i>, gdzie ma stoisko</div>
    <div class="card">
      Poinformuj <i>Wystawcę</i>, że do stoiska wkrótce podejdzie
      <i>Organizator</i> w sprawie rozliczenia i&nbsp;podpisania umowy
    </div>
  </div>

  <div class="card">
    <b>Wydaj identyfikator</b> (zapytaj, czy potrzebna jest smycz lub folia do
    identyfikatora)
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
