<script lang="ts" setup>
import { ticket } from '@/store'
import { onMounted, ref } from 'vue'

const medias = ['Głos Skierniewic i Okolic', 'ITS'].sort()

const vselect = ref()

onMounted(() => {
  if (!ticket.value.mediaName) {
    vselect.value.searchEl.focus()
  }
})
</script>

<template>
  <div class="card">
    <div class="mb-3">Wyszukaj <i>Media</i></div>
    <v-select ref="vselect" :options="medias" v-model="ticket.mediaName" />
    <Pagination :can-move-forward="!!ticket.mediaName" />
  </div>
</template>

<style lang="scss" scoped></style>
