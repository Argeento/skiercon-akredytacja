<script lang="ts" setup>
const ticketPrice = new Date().getDay() === 0 ? 20 : 40
</script>

<template>
  <div>Przyjmij opłatę za konwent {{ ticketPrice }}zł</div>

  Uwaga - dzieci do 10 roku życia wchodzą za darmo!

  <Pagination />
</template>

<style lang="scss" scoped></style>
