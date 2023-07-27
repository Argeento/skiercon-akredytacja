<script lang="ts" setup>
import { ticketsToSell } from '@/store'
</script>

<template>
  <b v-if="ticketsToSell.length > 1"> (x{{ ticketsToSell.length }})</b>
</template>
