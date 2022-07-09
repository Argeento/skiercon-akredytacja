<script lang="ts" setup>
import { accreditation } from '@/store'
</script>

<template>
  <div v-if="accreditation.personType === 'Wolontariusz'">
    <p>Poinformuj o tym, żeby zgłosił się do "leśniczówki"</p>
    <p>
      Poinformuj Wolontariusza, że przysługują mu 2 ciepłe posiłki odhaczane na
      tyle identyfikatora

      <img class="shadow m-8" src="/img/szop-lis-dzik-back.png" alt="" />
    </p>
  </div>

  <div v-if="accreditation.personType === 'Gość'">
    <p>
      Wydaj Pakiet Gościa (Kubek + Informator + Vinga coś tam jeszcze może doda
    </p>
    <p>
      Podaj informację, że na odwrocie identyfikatora znajdują się numery
      telefonów do Koordynatorów Gości i z danym Koordynatorem trzeba
      skontaktować się w kwestii noclegu i ewentualnego rozliczenia dojazdu
    </p>
  </div>

  <div v-if="accreditation.personType === 'Wystawca'">
    <p>Poinformuj wystawcę, gdzie ma stoisko</p>
    <p>
      Poinformuj wystawcę, że przyjdzie do nich na stoisko Organizator w sprawie
      rozliczenia i podpisania umowy
    </p>
  </div>

  <div>Wydaj identyfikator</div>
  <div>Zapytaj, czy potrzebna jest smycz lub folijka do identyfikatora</div>

  <Pagination next-text="Zakończ akredytację" end />
</template>

<style lang="scss" scoped></style>
