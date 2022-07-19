<script lang="ts" setup>
import TicketsTable from '../components/TicketsTable.vue'
import { api } from '@/db'
import { orderBy, limit } from 'firebase/firestore'
import { onUnmounted } from 'vue'

const { data: tickets, unsubscribe } = api.useCollection<Ticket>('tickets', [
  orderBy('ticketEndTime', 'desc'),
  limit(15)
])

onUnmounted(unsubscribe)

const links = [
  {
    name: 'Uczestnik',
    img: '/img/uczestnik-front.png',
    link: '/uczestnik/1'
  },
  {
    name: 'Twórca programu',
    img: '/img/program-front.png',
    link: '/tworca-programu/1'
  },
  {
    name: 'Organizator, Szop, Lis, Dzik',
    img: '/img/szop-front.png',
    link: '/wolontariusz/1'
  },
  {
    name: 'Gość',
    img: '/img/gosc-front.png',
    link: '/gosc/1'
  },
  {
    name: 'Media',
    img: '/img/media-front.png',
    link: '/media/1'
  },
  {
    name: 'Wystawca',
    img: '/img/wystawca-front.png',
    link: '/wystawca/1'
  }
]

// const m = [

// ].map(x => {
//   x.id = x.name.toLowerCase().replace(/ /g, '')
//   return x
// })

// async function add() {
//   for (let i = 0; i < m.length; i++) {
//     const x = m[i]
//     await api.addDoc(
//       'media',
//       {
//         name: x.name,
//         tickets: x.tickets,
//         id: i + 1
//       },
//       x.id
//     )
//   }
// }

// add()
</script>

<template>
  <div class="text-center mt-5 mb-3">
    <RouterLink class="text-xl skierfont" to="/">
      SkierCon akredytacja
    </RouterLink>
    <div>Start</div>
  </div>
  <div class="flex flex-wrap justify-center wrap">
    <router-link
      v-for="link in links"
      :key="link.name"
      class="person block m-3 shadow hover:shadow-xl transition-all"
      :to="link.link"
    >
      <img
        class="person__img"
        :src="'/skiercon-akredytacja' + link.img"
        alt=""
        width="300"
        height="173"
      />
      <div class="px-4 py-2 text-md">{{ link.name }}</div>
    </router-link>
  </div>

  <div class="container">
    <TicketsTable class="mt-10" :tickets="tickets" />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1100px;
  margin: 0 auto;
}
.person {
  width: 280px;
}
</style>
