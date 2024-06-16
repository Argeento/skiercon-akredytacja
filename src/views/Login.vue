<script lang="ts" setup>
import { FirebaseError } from '@firebase/util'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { faqLink, isUserAuth, people, tickets } from '@/store'
import { firestoreInstance } from '@/plugins/firestore'
import { orderBy } from '@firebase/firestore'
import axios from 'axios'
import { RouteName } from '@/rotuer'

const auth = getAuth()
const password = ref('')
const error = ref('')

const errorMap: Record<string, string> = {
  'auth/too-many-requests': 'Zbyt dużo prób logowania!',
  'auth/wrong-password': 'Nieprawidłowe hasło!'
}

const router = useRouter()
const loading = ref(false)

async function login() {
  if (loading.value) return
  if (password.value.length === 0) {
    error.value = 'Hasło nie może być puste!'
    return
  }

  loading.value = true

  try {
    // Login to firebase
    await signInWithEmailAndPassword(auth, 'akre@skiercon.pl', password.value)

    // subscribe for tickets
    firestoreInstance.useCollection<TicketInput>(
      'tickets2024',
      [orderBy('ticketEndTime', 'desc')],
      tickets
    )

    // Download necessary data
    await axios
      .get<GsPeople>(
        `https://us-central1-skiercon-akredytacja.cloudfunctions.net/data?key=${password.value}`
      )
      .then(res => {
        people.value = res.data
      })

    await axios
      .get<string>(
        `https://us-central1-skiercon-akredytacja.cloudfunctions.net/faq?key=${password.value}`
      )
      .then(res => {
        faqLink.value = res.data
      })

    router.replace({ name: RouteName.Akredytacja })
    isUserAuth.value = true
  } catch (err) {
    if (err instanceof FirebaseError) {
      error.value = errorMap[err.code] ?? 'Wystąpił nieznany błąd!'
      console.error(err.code)
    } else {
      throw err
    }
  }

  loading.value = false
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="login" class="w-52 mx-auto my-20 relative">
      <span
        v-if="loading"
        class="material-symbols-outlined icon absolute animate-spin bg-white text-violet-500"
      >
        sync
      </span>
      <img src="/logo.png" alt="" height="70" width="208" class="mb-12" />
      <label class="my-3 block">
        <div>Hasło:</div>
        <input
          type="password"
          v-model="password"
          :disabled="loading"
          class="border border-gray-400 rounded-md py-2 px-4 outline-none w-full disabled:border-gray-200 disabled:text-gray-400"
          autofocus
        />
        <div v-if="error" class="text-red-500">{{ error }}</div>
      </label>

      <button
        type="submit"
        :disabled="loading"
        class="button border-violet-300 w-full disabled:border-gray-200 disabled:text-gray-400"
      >
        Zaloguj
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 76px;
  right: 15px;
  top: -5px;
  animation: spin 1s linear infinite;
  border-radius: 50%;
}

@keyframes spin {
  to {
    transform: rotate(-360deg);
  }
}
</style>
