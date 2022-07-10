<script lang="ts" setup>
import { ticket } from './store'
</script>

<template>
  <RouterLink to="/">
    <h1 class="text-xl text-center my-4">SkierCon Akredytacja</h1>
  </RouterLink>

  <div class="container">
    <RouterView />
  </div>

  <div class="acc-dev bg-gray-100 border">
    <pre>{{ ticket }}</pre>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.scss';

.acc-dev {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  font-size: 14px;
}
</style>
