<script lang="ts" setup>
import { accreditation } from '@/store'

const medias = ['Głos Skierniewic i Okolic', 'ITS'].sort()
</script>

<template>
  <v-select label="Media" :options="medias" v-model="accreditation.mediaName" />
  <Pagination />
</template>

<style lang="scss" scoped></style>
