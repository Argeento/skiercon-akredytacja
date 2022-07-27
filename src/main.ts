import { createApp } from 'vue'
import App from './App.vue'
import router from './rotuer'
import vSelect from 'vue-select'
import Pagination from './components/global/Pagination.vue'
import MainTitleVue from './components/global/MainTitle.vue'
import Counter from './components/global/Counter.vue'
import TicketsToSellCounter from './components/global/TicketsToSellCounter.vue'
import VueAwesomePaginate from 'vue-awesome-paginate'

import './plugins/dayjs'

import { initFirebaseInstance } from './plugins/firestore'
import 'vue-awesome-paginate/dist/style.css'
import 'vue-select/dist/vue-select.css'

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
