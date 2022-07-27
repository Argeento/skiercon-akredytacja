<script lang="ts" setup>
import { RouteName } from '@/rotuer'
import { tickets } from '@/store'
</script>

<template>
  <header
    class="w-full shadow bg-white fixed top-0 left-0 py-2 px-10 h-14 flex items-center justify-between"
  >
    <div class="flex">
      <router-link
        :to="{ name: RouteName.Akredytacja }"
        class="skierfont text-violet-600"
      >
        Skiercon 2022
      </router-link>

      <div class="ml-4">
        Liczba uczestników: <b>{{ tickets.length }}</b>
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
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply p-2;

  &.router-link-active {
    @apply text-violet-500 underline;
  }
}
</style>
