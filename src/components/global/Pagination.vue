<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { sendAccreditation } from '../../store'

const props = defineProps({
  nextText: {
    type: String,
    default: 'Dalej'
  },
  prevText: {
    type: String,
    default: 'Wstecz'
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

function onNextClick() {
  if (props.end) {
    sendAccreditation()
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
