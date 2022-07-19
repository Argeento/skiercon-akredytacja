import { createApp } from 'vue'
import App from './App.vue'
import router from './rotuer'
import vSelect from 'vue-select'
import Pagination from './components/global/Pagination.vue'
import Counter from './components/global/Counter.vue'
import 'vue-select/dist/vue-select.css'
import { initFirebaseInstance } from './db'
import dayjs from 'dayjs'

import pl from 'dayjs/locale/pl'
dayjs.locale(pl)

initFirebaseInstance()

const app = createApp(App)
app.use(router)
app.component('v-select', vSelect)
app.component('Pagination', Pagination)
app.component('Counter', Counter)
app.mount('#app')
