<script lang="ts" setup>
import { FirebaseError } from '@firebase/util'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { isUserAuth } from '@/store'

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
    await signInWithEmailAndPassword(auth, 'akre@skiercon.pl', password.value)
    isUserAuth.value = true
    router.replace('/start')
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
    <form @submit.prevent="login" class="w-52 mx-auto my-20">
      <label class="my-3 block">
        <div>Hasło:</div>
        <input
          type="password"
          v-model="password"
          class="border border-gray-400 rounded-md py-2 px-4 outline-none w-full"
          autofocus
        />
        <div v-if="error" class="text-red-500">{{ error }}</div>
      </label>

      <button type="submit" class="button border-blue-400 w-full">
        Zaloguj
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
