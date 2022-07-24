<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { firestoreInstance } from '@/plugins/firestore'
import { resetTicket, ticket } from '@/store'

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

function onPrevClick() {
  if (currentStep === 1) {
    router.push('/')
  } else {
    router.push(`${route.matched[0].path}/${currentStep - 1}`)
  }
}

async function onNextClick() {
  if (
    !props.canMoveForward &&
    !confirm('Czy na pewno chcesz pominąć ten krok?')
  )
    return

  if (props.end) {
    await firestoreInstance.addTicket(ticket.value)
    resetTicket()
    router.push('/start')
  } else {
    router.push(`${route.matched[0].path}/${currentStep + 1}`)
  }
}
</script>

<template>
  <div class="mt-10 flex justify-center">
    <button class="button mr-3" @click="onPrevClick">
      {{ prevText }}
    </button>

    <button
      class="button"
      :class="canMoveForward ? 'border-violet-300' : 'border-red-500 '"
      @click="onNextClick"
    >
      {{ nextText }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
