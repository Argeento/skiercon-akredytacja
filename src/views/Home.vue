<script lang="ts" setup></script>

<template>
  <h1>Ustal kto przyszedł</h1>
  <hr />

  <router-link class="person" to="/uczestnik/1">Uczestnik</router-link>
  <router-link class="person" to="/tworca-programu/1"
    >Twórca programu</router-link
  >
  <router-link class="person" to="/wolontariusz/1">
    Wolontariusz (Organizator, Szop, Lis, Dzik)
  </router-link>
  <router-link class="person" to="/gosc/1">Gość</router-link>
  <router-link class="person" to="/media/1">Media</router-link>
  <router-link class="person" to="/wystawca/1">Wystawca</router-link>
</template>

<style lang="scss">
.person {
  display: block;

  &:hover {
    text-decoration: underline;
  }
}
</style>
