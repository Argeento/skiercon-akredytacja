<script lang="ts" setup>
import { tickets } from '@/store'
import { Color } from '@/utils'
import { Chart } from 'chart.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const ticketsChartRef = ref<HTMLCanvasElement>()

function getTicketsByType(sleepType: Sleep) {
  // @ts-ignore
  return tickets.value.filter(ticket => ticket.sleep === sleepType).length
}

let chart: Chart<'pie', number[], string>

function getData() {
  return [
    getTicketsByType('1'),
    getTicketsByType('B2'),
    getTicketsByType('SOSW'),
    getTicketsByType('PN'),
    getTicketsByType('nope')
  ]
}

watch(tickets, () => {
  if (chart) {
    chart.data.datasets[0].data = getData()
    chart.update('resize')
  }
})

onMounted(() => {
  chart = new Chart(ticketsChartRef.value!, {
    type: 'pie',
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    data: {
      labels: [
        'Sleep room',
        'B2 Wystawcy',
        'SOSW',
        'Pole namiotowe',
        'Bez spanka'
      ],
      datasets: [
        {
          data: getData(),
          backgroundColor: [
            Color.Normal,
            Color.Program,
            Color.Volunteers,
            Color.Vendors,
            Color.Guests,
            Color.Media
          ]
        }
      ]
    }
  })
})

onUnmounted(() => {
  chart.destroy()
})
</script>

<template>
  <canvas ref="ticketsChartRef" width="200" height="200"></canvas>
</template>

<style lang="scss" scoped></style>
