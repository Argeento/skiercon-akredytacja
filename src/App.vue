<script lang="ts" setup>
import { ticket } from './store'
</script>

<template>
  <RouterView />

  <div class="acc-dev">
    <pre>{{ ticket }}</pre>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.scss';

.title {
  font-family: skiercon;
}

.acc-dev {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  font-size: 14px;
}
</style>
