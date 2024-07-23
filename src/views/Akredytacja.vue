<script lang="ts" setup></script>

<template>
  <div class="flex flex-wrap justify-center wrap">
    <router-link
      class="person block m-3 shadow hover:shadow-xl transition-all"
      to="/akredytacja/szukaj/2"
    >
      <img
        class="person__img"
        :src="'/skiercon-akredytacja/img/uczestnik-front.jpg'"
        alt=""
        width="300"
        height="173"
      />
      <div class="px-4 py-2 text-md">Uczestnik</div>
    </router-link>
    <router-link
      class="person block m-3 shadow hover:shadow-xl transition-all p-4 text-center text-xl"
      to="/akredytacja/szukaj/1"
    >
      Szukaj
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1100px;
  margin: 0 auto;
}
.person {
  width: 280px;
}
</style>
