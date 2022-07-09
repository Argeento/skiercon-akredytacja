, Personimport { useRoute } from 'vue-router';
<script lang="ts" setup>
import type { Person } from '@/store'
import { useRoute } from 'vue-router'
import { accreditation } from '@/store'

const route = useRoute()

accreditation.value.personType = route.meta.person as Person
accreditation.value.accreditationStartTime = new Date()
</script>

<template>
  <div>{{ $route.meta.person }}</div>
  <router-view />
</template>

<style lang="scss" scoped></style>
