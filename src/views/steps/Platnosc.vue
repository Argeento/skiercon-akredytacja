<script lang="ts" setup>
import { firestoreInstance } from '@/plugins/firestore'
import { RouteName } from '@/rotuer'
import { resetTicketsToSell, ticket, ticketsToSell } from '@/store'
import { computed, nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'

const TICKET_PRICE = new Date().getDay() === 0 ? 30 : 69
const SLEEP_PRICE = 5
const children = ref(0)
const guardians = ref(0)

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
        if (
          ticket.ticketType === 'volunteer' ||
          (ticket.ticketType === 'program' && ticket.discountSleep === '100%')
        ) {
          price += 0
        } else {
          price += SLEEP_PRICE
        }
      }
      return acc + price
    }, 0) -
    children.value * TICKET_PRICE -
    guardians.value * TICKET_PRICE
)

const sleeps = computed(() => ticketsToSell.value.filter(t => t.sleep).length)
const router = useRouter()

const isLoading = ref(false)
async function endAkre() {
  if (isLoading.value === true) return
  isLoading.value = true
  await firestoreInstance.addTickets(ticketsToSell.value)
  await router.push({ name: RouteName.Akredytacja })
  await nextTick()
  resetTicketsToSell()
  isLoading.value = false
}
</script>

<template>
  <Counter
    v-if="ticket.ticketType === 'normal' && ticketsToSell.length > 1"
    v-model="children"
    :min="0"
    :max="ticketsToSell.length - 1"
    label="Liczba dzieci poniżej 7 roku życia:"
  />
  <Counter
    v-if="ticket.ticketType === 'normal' && ticketsToSell.length > 1"
    v-model="guardians"
    :min="0"
    :max="ticketsToSell.length - 1"
    label="Liczba opiekunów osoby niepełnosprawnej:"
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
      Przyjmij opłatę za konwent: <b>{{ totalPrice }}zł</b>
    </div>
    <div class="mb-3" v-else><b>Bezpłatne wejście</b> na konwent</div>
  </div>

  <div v-if="ticket.ticketType === 'volunteer'">
    <div class="card">
      Poinformuj <i>Wolontariusza</i> o tym, żeby po akredytacji zgłosił się do
      <span
        v-if="ticket.volunteerType === 'LIS' || ticket.volunteerType === 'SZOP'"
      >
        <b>Leśniczówki</b> (korytarz na lewo i&nbsp;do samego końca)
      </span>
      <span v-else>
        <b>Org-Roomu</b> (korytarz na prawo i&nbsp;od razu po lewej)
      </span>
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
    </div>
  </div>

  <div v-if="ticket.ticketType === 'vendor'">
    <div class="card">Poinformuj <i>Wystawcę</i>, gdzie ma stoisko</div>
    <div class="card">
      Poinformuj <i>Wystawcę</i>, że do stoiska wkrótce podejdzie
      <i>Organizator</i> w sprawie rozliczenia i&nbsp;podpisania umowy
    </div>
  </div>

  <div v-if="sleeps > 0" class="card">
    <div class="my-2">
      <b>Załóż {{ sleeps > 1 ? 'opaski' : 'opaskę' }} na rękę</b>
      <b v-if="sleeps > 1"> (x{{ sleeps }})</b>

      <div
        v-if="
          ticket.ticketType === 'normal' ||
          ticket.ticketType === 'program' ||
          ticket.ticketType === 'others'
        "
        class="mt-2"
      >
        Poinformuj uczestnika, że sleep jest w <b>Prusie</b>
      </div>

      <div v-if="ticket.ticketType === 'volunteer'">
        Poinformuj wolontariusza, że sleep jest w <b>Mechaniku</b>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="my-2">
      <b>Wydaj identyfikator</b> <TicketsToSellCounter />

      (zapytaj, czy potrzebna jest smycz lub folia do identyfikatora)
    </div>
  </div>

  <Pagination
    :next-text="isLoading ? 'Dodawanie...' : 'Zakończ akredytację'"
    @next="endAkre"
    @prev="
      () => {
        switch (ticketsToSell[0].ticketType) {
          case 'program':
          case 'volunteer':
          case 'others':
          case 'normal':
            router.push({ name: RouteName.Nocleg })
            break
          default:
            router.push({ name: RouteName.Szukaj })
        }
      }
    "
  />
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
