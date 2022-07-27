<script lang="ts" setup>
import { tickets } from '@/store'
import TicketsTable from '../components/TicketsTable.vue'
</script>

<template>
  <div class="px-10">
    <TicketsTable :tickets="tickets" />
  </div>
</template>

<style lang="scss" scoped></style>
