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
  if (!props.canMoveForward) return

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
    <button class="block m-2 py-2 px-5 border" @click="onPrevClick">
      {{ prevText }}
    </button>

    <button class="block m-2 py-2 px-5 bg-lime-300 border" @click="onNextClick">
      {{ nextText }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
