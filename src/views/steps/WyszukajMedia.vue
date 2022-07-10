<script lang="ts" setup>
import { ticket } from '@/store'

const medias = ['Głos Skierniewic i Okolic', 'ITS'].sort()
</script>

<template>
  <v-select label="Media" :options="medias" v-model="ticket.mediaName" />
  <Pagination :can-move-forward="!!ticket.mediaName" />
</template>

<style lang="scss" scoped></style>
