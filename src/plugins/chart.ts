import {
  ArcElement,
  Chart,
  // Decimation,
  // Filler,
  Legend,
  // PolarAreaController,
  // RadarController,
  // ScatterController,
  // CategoryScale,
  LinearScale,
  // BarController,
  // BubbleController,
  // DoughnutController,
  LineController,
  LineElement,
  PieController,
  // BarElement,
  PointElement,
  // LogarithmicScale,
  // RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip
  // SubTitle
} from 'chart.js'

import 'chartjs-adapter-date-fns'
// import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes'

Chart.register(
  ArcElement,
  LineElement,
  // BarElement,
  PointElement,
  // BarController,
  // BubbleController,
  // DoughnutController,
  LineController,
  PieController,
  // PolarAreaController,
  // RadarController,
  // ScatterController,
  // CategoryScale,
  LinearScale,
  // LogarithmicScale,
  // RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  // Decimation,
  // Filler,
  Legend,
  Title,
  Tooltip
  // SubTitle
)
