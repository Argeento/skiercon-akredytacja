<script lang="ts" setup>
import MainNav from './components/MainNav.vue'
import { isUserAuth } from './store'
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
