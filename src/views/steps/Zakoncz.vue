<script lang="ts" setup>
import { ticket } from '@/store'
</script>

<template>
  <div v-if="ticket.personType === 'Wolontariusz'">
    <div class="card">
      Poinformuj Wolontariusza o tym, żeby zgłosił się do "<b>Leśniczówki</b>"
    </div>
    <div class="card">
      Poinformuj Wolontariusza, że przysługują mu
      <b>2 ciepłe posiłki</b> odhaczane na tyle identyfikatora

      <img class="plakietka-reverse" src="/img/szop-lis-dzik-back.png" alt="" />
    </div>
  </div>

  <div v-if="ticket.personType === 'Gość'">
    <div class="card">Wydaj Pakiet Gościa (Kubek)</div>
    <div class="card">
      Podaj informację, że na odwrocie identyfikatora znajdują się numery
      telefonów do Koordynatorów Gości i z danym Koordynatorem trzeba
      skontaktować się w kwestii noclegu i ewentualnego rozliczenia dojazdu
    </div>
  </div>

  <div v-if="ticket.personType === 'Wystawca'">
    <div class="card">Poinformuj wystawcę, gdzie ma stoisko</div>
    <div class="card">
      Poinformuj wystawcę, że do stoiska podejdzie <b>Organizator</b> w sprawie
      rozliczenia i&nbsp;podpisania umowy
    </div>
  </div>

  <div class="card">
    Wydaj identyfikator (zapytaj, czy potrzebna jest smycz lub folijka do
    identyfikatora)
  </div>

  <Pagination next-text="Zakończ akredytację" end />
</template>

<style lang="scss" scoped></style>
