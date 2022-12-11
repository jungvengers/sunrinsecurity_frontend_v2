<template>
  <header>
    <NuxtLink :to="'/'"
      ><img class="header_logo" src="@/assets/images/logo.png"
    /></NuxtLink>
    <NuxtLink
      v-for="(i, n) in headerMenuList"
      :key="n"
      class="header_menu"
      :to="i.path"
      >{{ i.name }}</NuxtLink
    >
  </header>
</template>

<script setup>
import headerMenuList from "~~/constants/headerMenuList";
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/components/Header/styles.scss";
</style>
