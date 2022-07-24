import { createApp } from 'vue'
import App from './App.vue'
import router from './rotuer'
import vSelect from 'vue-select'
import Pagination from './components/global/Pagination.vue'
import Counter from './components/global/Counter.vue'
import 'vue-select/dist/vue-select.css'
import { initFirebaseInstance } from './plugins/firestore'

import './plugins/dayjs'

initFirebaseInstance()

const app = createApp(App)
app.use(router)
app.component('v-select', vSelect)
app.component('Pagination', Pagination)
app.component('Counter', Counter)
app.mount('#app')
