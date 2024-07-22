<script lang="ts" setup>
import { firestoreInstance } from '@/plugins/firestore'
import { RouteName } from '@/rotuer'
import { resetTicketsToSell, ticketsToSell } from '@/store'
import { nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  nextText: {
    type: String,
    default: 'Dalej'
  },
  prevText: {
    type: String,
    default: 'Wstecz'
  },
  canMoveForward: {
    type: Boolean,
    default: true
  },
  end: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const router = useRouter()
const currentStep = route.meta.step as number

const isLoading = ref(false)

function onPrevClick() {
  if (currentStep === 1) {
    router.push({ name: RouteName.Akredytacja })
  } else {
    router.push(`${route.matched[1].path}/${currentStep - 1}`)
  }
}

async function onNextClick() {
  console.log('asd')
  if (
    !props.canMoveForward &&
    !confirm('Czy na pewno chcesz pominąć ten krok?')
  )
    return

  if (props.end) {
    if (isLoading.value === true) return
    isLoading.value = true
    await firestoreInstance.addTickets(ticketsToSell.value)
    await router.push({ name: RouteName.Akredytacja })
    await nextTick()
    resetTicketsToSell()
    isLoading.value = false
  } else {
    router.push(`${route.matched[1].path}/${currentStep + 1}`)
  }
}
</script>

<template>
  <div class="my-5 flex justify-center">
    <button class="button mr-3" @click="onPrevClick">
      {{ prevText }}
    </button>

    <button
      class="button w-52"
      :class="canMoveForward ? 'border-violet-300' : 'border-red-500 '"
      @click="onNextClick"
    >
      {{ isLoading ? 'Dodawanie... ' : nextText }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
