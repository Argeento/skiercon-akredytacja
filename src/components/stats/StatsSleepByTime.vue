<script lang="ts" setup>
import { tickets } from '@/store'
import { Chart } from 'chart.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { pl } from 'date-fns/locale'
import { Color } from '@/utils'
import StatsSleepByDistribution from './StatsSleepByDistribution.vue'

const sleepsByTimeChartRef = ref<HTMLCanvasElement>()

function getTicketsByType(sleepType: Sleep) {
  // @ts-ignore
  return tickets.value.filter(ticket => ticket.sleep === sleepType).length
}

function getDataBySleepType(sleepType: Sleep) {
  const x = tickets.value.filter(ticket => ticket.sleep === sleepType)
  return [
    {
      x: '2022-07-29T10:00:00.000Z',
      y: 0
    },
    ...x
      .map(ticket => ticket.ticketEndTime)
      .sort()
      .map((time, index) => ({ x: time, y: index + 1 })),
    {
      x: new Date().toISOString(),
      y: x.length
    }
  ]
}

function getData() {
  return {
    datasets: [
      {
        label: 'Sleep room',
        borderColor: 'rgb(139, 92, 246)',
        data: getDataBySleepType('1')
      },
      {
        label: 'B2 Wystawcy',
        borderColor: Color.Normal,
        data: getDataBySleepType('B2')
      },
      {
        label: 'SOSW',
        borderColor: Color.Program,
        data: getDataBySleepType('SOSW')
      },
      {
        label: 'Pole namiotowe',
        borderColor: Color.Vendors,
        data: getDataBySleepType('PN')
      }
    ]
  }
}

let chart: Chart<
  'line',
  {
    x: string
    y: number
  }[],
  unknown
>

watch(tickets, () => {
  if (chart) {
    chart.data = getData()
    chart.update('resize')
  }
})

onMounted(() => {
  chart = new Chart(sleepsByTimeChartRef.value!, {
    type: 'line',
    data: getData(),
    options: {
      elements: {
        point: {
          radius: 0,
          hitRadius: 20
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Sleep',
            padding: 10
          }
        },
        x: {
          type: 'time',
          min: '2022-07-29T10:00:00.000Z',
          max: '2022-07-31T13:00:00.000Z',
          adapters: {
            date: {
              locale: pl
            }
          },
          time: {
            tooltipFormat: 'EE HH:mm',
            unit: 'hour',
            displayFormats: {
              hour: 'EE HH:mm'
            }
          }
        }
      }
    }
  })
})

onUnmounted(() => {
  chart.destroy()
})
</script>

<template>
  <div class="max-container">
    <h1 class="text-2xl font-bold text-center mb-12">Sleep</h1>
    <div class="mb-16 flex justify-around">
      <table :key="tickets.length">
        <tr>
          <th>Typ</th>
          <th class="text-right">Liczba osób</th>
        </tr>
        <tr>
          <td>Sleep room</td>
          <td class="text-right">{{ getTicketsByType('1') }}</td>
        </tr>
        <tr>
          <td>B2 Wystawcy</td>
          <td class="text-right">{{ getTicketsByType('B2') }}</td>
        </tr>
        <tr>
          <td>SOSW</td>
          <td class="text-right">{{ getTicketsByType('SOSW') }}</td>
        </tr>
        <tr>
          <td>Pole namiotowe</td>
          <td class="text-right">{{ getTicketsByType('PN') }}</td>
        </tr>
        <tr>
          <td><b>Razem</b></td>
          <td class="text-right">
            <b>{{ tickets.length - getTicketsByType('nope') }}</b>
          </td>
        </tr>
      </table>
      <div class="ml-10 distribution-wrap">
        <StatsSleepByDistribution />
      </div>
    </div>
    <div class="ml-2 mr-8">
      <canvas ref="sleepsByTimeChartRef" width="100" height="60"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.max-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.distribution-wrap {
  width: 380px;
  margin: -50px 0 -100px;
}
</style>
