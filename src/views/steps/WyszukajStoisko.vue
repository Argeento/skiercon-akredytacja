<script lang="ts" setup>
import { ticket } from '@/store'

const vendors = ['Skyweavers', 'Mama Irenka', 'Konopczyńscy'].sort()
</script>

<template>
  <v-select label="Media" :options="vendors" v-model="ticket.vendorName" />
  <Pagination />
</template>

<style lang="scss" scoped></style>
