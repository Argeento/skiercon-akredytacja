<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { sendTicket } from '../../store'

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
    await sendTicket()
    router.push('/')
  } else {
    router.push(`${route.matched[0].path}/${currentStep + 1}`)
  }
}
</script>

<template>
  <div class="mt-10 flex justify-center">
    <button
      class="block m-2 py-2 px-5 border rounded-md shadow hover:shadow-md transition-all"
      @click="onPrevClick"
    >
      {{ prevText }}
    </button>

    <button
      class="m-2 py-2 px-5 border-2 rounded-md w-48 shadow hover:shadow-md transition-all"
      :class="canMoveForward ? 'border-blue-300' : 'border-red-500 '"
      @click="onNextClick"
    >
      {{ nextText }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
