<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: -Infinity
  },
  max: {
    type: Number,
    default: Infinity
  }
})

const emits = defineEmits(['update:modelValue'])

function increase() {
  if (props.modelValue < props.max) {
    emits('update:modelValue', props.modelValue + 1)
  }
}

function decrease() {
  if (props.modelValue > props.min) {
    emits('update:modelValue', props.modelValue - 1)
  }
}
</script>

<template>
  <div class="card select-none">
    {{ label }}
    <span class="pl-2 text-xl">
      <button
        class="counter-button"
        :class="{ 'cursor-not-allowed': modelValue === min }"
        @click="decrease"
      >
        -
      </button>
      <span class="px-3">
        {{ modelValue === 69 ? 'nice' : modelValue }}
      </span>
      <button
        class="counter-button"
        :class="{ 'cursor-not-allowed': modelValue === max }"
        @click="increase"
      >
        +
      </button>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.counter-button {
  @apply p-2 font-bold border w-8 rounded shadow hover:shadow-md transition-all;
}
</style>
