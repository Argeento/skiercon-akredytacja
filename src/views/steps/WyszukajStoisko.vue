<script lang="ts" setup>
import { accreditation } from '@/store'

const vendors = ['Skyweavers', 'Mama Irenka', 'Konopczyńscy'].sort()
</script>

<template>
  <v-select
    label="Media"
    :options="vendors"
    v-model="accreditation.vendorName"
  />
  <Pagination />
</template>

<style lang="scss" scoped></style>
