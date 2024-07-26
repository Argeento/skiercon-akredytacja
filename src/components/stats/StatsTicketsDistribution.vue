<script lang="ts" setup>
import { tickets } from '@/store'
import type { TicketType } from '@/types'
import { Color } from '@/utils'
import { Chart } from 'chart.js'
import { get } from 'lodash-es'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const ticketsChartRef = ref<HTMLCanvasElement>()

function getTicketsByType(ticketType: TicketType | 'normal') {
  // @ts-ignore
  return tickets.value.filter(ticket => ticket.ticketType === ticketType).length
}

let chart: Chart<'pie', number[], string>

function getData() {
  return [
    getTicketsByType('normal'),
    getTicketsByType('program'),
    getTicketsByType('volunteer'),
    getTicketsByType('vendor'),
    getTicketsByType('guest'),
    getTicketsByType('medium'),
    getTicketsByType('vip'),
    getTicketsByType('workers'),
    getTicketsByType('others')
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
        'Uczestnicy',
        'Program',
        'Wolontariusze',
        'Wystawcy',
        'Goście',
        'Media',
        'VIP',
        'Pracownicy',
        'Inni'
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
            Color.Media,
            Color.VIP,
            Color.Workers,
            Color.Others
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
