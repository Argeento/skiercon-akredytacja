<script lang="ts" setup>
import { isUserAuth } from './store'
import MainNav from './components/MainNav.vue'
</script>

<template>
  <MainNav v-if="isUserAuth" />
  <main class="mt-20">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import '@/assets/base.scss';
</style>
