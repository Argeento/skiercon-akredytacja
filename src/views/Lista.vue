<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { tickets } from '@/store'
import TicketsTable from '../components/TicketsTable.vue'

const showRemove = ref(false)

const x = ref(0)
const y = ref(0)

function updateMousePosition(event: any) {
  x.value = event.pageX
  y.value = event.pageY
}

function secret(e: any) {
  if (x.value < 20 && y.value < 20 && e.key === 'd') {
    showRemove.value = !showRemove.value
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('keydown', secret)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('keydown', secret)
})
</script>

<template>
  <div class="px-10">
    <TicketsTable :tickets="tickets" :without-remove="!showRemove" />
  </div>
</template>

<style lang="scss" scoped></style>
