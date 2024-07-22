import { createApp } from 'vue'
import VueAwesomePaginate from 'vue-awesome-paginate'
import vSelect from 'vue-select'
import App from './App.vue'
import Counter from './components/global/Counter.vue'
import MainTitleVue from './components/global/MainTitle.vue'
import Pagination from './components/global/Pagination.vue'
import TicketsToSellCounter from './components/global/TicketsToSellCounter.vue'
import router from './rotuer'

import './plugins/chart'
import './plugins/dayjs'

import 'vue-awesome-paginate/dist/style.css'
import 'vue-select/dist/vue-select.css'
import { initFirebaseInstance } from './plugins/firestore'

initFirebaseInstance()

const app = createApp(App)
app.use(router)
app.use(VueAwesomePaginate)
app.component('v-select', vSelect)
app.component('Pagination', Pagination)
app.component('Counter', Counter)
app.component('MainTitle', MainTitleVue)
app.component('TicketsToSellCounter', TicketsToSellCounter)
app.mount('#app')

window.onbeforeunload = function () {
  return true
}
