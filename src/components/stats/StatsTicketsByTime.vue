<script lang="ts" setup>
import { tickets } from '@/store'
import type { TicketType } from '@/types'
import { Color } from '@/utils'
import { Chart } from 'chart.js'
import { pl } from 'date-fns/locale'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import StatsTicketsDistribution from './StatsTicketsDistribution.vue'

const ticketsByTimeChartRef = ref<HTMLCanvasElement>()

function getTicketsByType(ticketType: TicketType | 'normal') {
  // @ts-ignore
  return tickets.value.filter(ticket => ticket.ticketType === ticketType).length
}

function getSleepsByType(ticketType: TicketType | 'normal') {
  // @ts-ignore
  return tickets.value.filter(
    ticket => ticket.ticketType === ticketType && ticket.sleep
  ).length
}

function getDataByTicketType(ticketType?: TicketType | 'normal') {
  const x = tickets.value.filter(ticket =>
    ticketType ? ticket.ticketType === ticketType : true
  )
  return [
    {
      x: '2024-07-26T08:00:00.000Z',
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
        label: 'Wszyscy',
        borderColor: 'rgb(139, 92, 246)',
        data: getDataByTicketType()
      },
      {
        label: 'Uczestnicy',
        borderColor: Color.Normal,
        data: getDataByTicketType('normal')
      },
      {
        label: 'Program',
        borderColor: Color.Program,
        data: getDataByTicketType('program')
      },
      {
        label: 'Wolo',
        borderColor: Color.Volunteers,
        data: getDataByTicketType('volunteer')
      },
      {
        label: 'Goście',
        borderColor: Color.Guests,
        data: getDataByTicketType('guest'),
        hidden: true
      },
      {
        label: 'Media',
        borderColor: Color.Media,
        data: getDataByTicketType('medium'),
        hidden: true
      },
      {
        label: 'Wystawcy',
        borderColor: Color.Vendors,
        data: getDataByTicketType('vendor'),
        hidden: true
      },
      {
        label: 'Pracownicy',
        borderColor: Color.Workers,
        data: getDataByTicketType('workers'),
        hidden: true
      },
      {
        label: 'Inni',
        borderColor: Color.Others,
        data: getDataByTicketType('others'),
        hidden: true
      },
      {
        label: 'VIP',
        borderColor: Color.VIP,
        data: getDataByTicketType('vip'),
        hidden: true
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
  chart = new Chart(ticketsByTimeChartRef.value!, {
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
            text: 'Identyfikatory',
            padding: 10
          }
        },
        x: {
          type: 'time',
          min: '2024-07-26T08:00:00.000Z',
          max: '2024-07-28T12:00:00.000Z',
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
    <h1 class="text-2xl font-bold text-center mb-12">Identyfikatory</h1>
    <div class="mb-16 flex justify-around">
      <table :key="tickets.length">
        <tr>
          <th>Typ</th>
          <th class="text-right">Liczba osób</th>
        </tr>
        <tr>
          <td>Uczestnicy</td>
          <td class="text-right">{{ getTicketsByType('normal') }}</td>
        </tr>
        <tr>
          <td>Program</td>
          <td class="text-right">{{ getTicketsByType('program') }}</td>
        </tr>
        <tr>
          <td>Wolontariusze</td>
          <td class="text-right">{{ getTicketsByType('volunteer') }}</td>
        </tr>
        <tr>
          <td>Goście</td>
          <td class="text-right">{{ getTicketsByType('guest') }}</td>
        </tr>
        <tr>
          <td>Media</td>
          <td class="text-right">{{ getTicketsByType('medium') }}</td>
        </tr>
        <tr>
          <td>Wystawcy</td>
          <td class="text-right">{{ getTicketsByType('vendor') }}</td>
        </tr>
        <tr>
          <td>Pracownicy</td>
          <td class="text-right">{{ getTicketsByType('workers') }}</td>
        </tr>
        <tr>
          <td>Inni</td>
          <td class="text-right">{{ getTicketsByType('others') }}</td>
        </tr>
        <tr>
          <td>VIP</td>
          <td class="text-right">{{ getTicketsByType('vip') }}</td>
        </tr>
        <tr>
          <td><b>Razem</b></td>
          <td class="text-right">
            <b>{{ tickets.length }}</b>
          </td>
        </tr>
      </table>
      <div class="ml-10 distribution-wrap">
        <StatsTicketsDistribution />
      </div>
    </div>
    <div class="ml-2 mr-8">
      <canvas ref="ticketsByTimeChartRef" width="100" height="60"></canvas>
    </div>
  </div>
  <div class="max-container">
    <h1 class="text-2xl font-bold text-center mb-12">Sleep</h1>
    <div class="mb-16 flex justify-around">
      <table :key="tickets.length">
        <tr>
          <th>Typ</th>
          <th class="text-right">Sleepy</th>
        </tr>
        <tr>
          <td>Uczestnicy</td>
          <td class="text-right">{{ getSleepsByType('normal') }}</td>
        </tr>
        <tr>
          <td>Program</td>
          <td class="text-right">{{ getSleepsByType('program') }}</td>
        </tr>
        <tr>
          <td>Wolontariusze</td>
          <td class="text-right">{{ getSleepsByType('volunteer') }}</td>
        </tr>
        <tr>
          <td>Razem</td>
          <td class="text-right">
            <b>{{
              getSleepsByType('normal') +
              getSleepsByType('program') +
              getSleepsByType('volunteer')
            }}</b>
          </td>
        </tr>
      </table>
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
