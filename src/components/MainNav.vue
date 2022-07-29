<script lang="ts" setup>
import { RouteName } from '@/rotuer'
import { faqLink, tickets } from '@/store'
</script>

<template>
  <header
    class="w-full shadow bg-white fixed top-0 left-0 py-2 px-10 h-14 flex items-center justify-between z-20"
  >
    <div class="flex">
      <router-link
        :to="{ name: RouteName.Akredytacja }"
        class="skierfont text-violet-600"
      >
        Skiercon 2022
      </router-link>

      <div class="ml-4">
        Wydane identyfikatory: <b>{{ tickets.length }}</b>
      </div>
    </div>

    <nav>
      <router-link :to="{ name: RouteName.Akredytacja }" class="link"
        >Akredytacja</router-link
      >
      <router-link :to="{ name: RouteName.Lista }" class="link"
        >Lista</router-link
      >
      <router-link :to="{ name: RouteName.Statystyki }" class="link"
        >Statystyki</router-link
      >
      <router-link :to="{ name: RouteName.Lesniczowka }" class="link"
        >Leśniczówka</router-link
      >
      <a v-if="faqLink" :href="faqLink" class="link" target="_blank">FAQ 🡭</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply py-2 px-2.5;

  &.router-link-active {
    @apply text-violet-500 underline;
  }
}
</style>
