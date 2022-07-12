<script lang="ts" setup>
import { ticket } from '@/store'

const vendors = ['Skyweavers', 'Mama Irenka', 'Konopczyńscy'].sort()
</script>

<template>
  <div class="card">
    <div class="mb-3">Wyszukaj <i>Wystawcę</i></div>
    <v-select label="Media" :options="vendors" v-model="ticket.vendorName" />
    <Pagination />
  </div>
</template>

<style lang="scss" scoped></style>
