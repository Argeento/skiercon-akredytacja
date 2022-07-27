<script lang="ts" setup>
import { ticketsToSell } from '@/store'
</script>

<template>
  <b v-if="ticketsToSell.length > 1"> ({{ ticketsToSell.length }}x)</b>
</template>
