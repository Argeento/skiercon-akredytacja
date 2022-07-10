import { createApp } from 'vue'
import App from './App.vue'
import router from './rotuer'

import vSelect from 'vue-select'
import Pagination from './components/global/Pagination.vue'
import 'vue-select/dist/vue-select.css'
import { initFirebaseInstance } from './db'

async function main() {
  const apiKey = window.localStorage.getItem('key') || prompt('Hasło')
  if (!apiKey) return
  window.localStorage.setItem('key', apiKey)

  try {
    initFirebaseInstance(apiKey)
  } catch (e) {
    alert('Nieprawidłowe hasło!')
  }

  const app = createApp(App)
  app.component('v-select', vSelect)
  app.use(router)
  app.component('Pagination', Pagination)

  app.mount('#app')
}

main()
