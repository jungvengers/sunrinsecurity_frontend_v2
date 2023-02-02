<template>
  <header>
    <div>
      <NuxtLink :to="'/'" class="header_logo_link"
        ><img class="header_logo" src="@/assets/images/logo.svg"
      /></NuxtLink>
      <NuxtLink
        v-for="(i, n) in headerMenuList"
        :key="n"
        class="header_menu"
        :to="i.path"
        >{{ i.name }}</NuxtLink
      >
    </div>
  </header>
</template>

<script setup>
import headerMenuList from "~~/constants/headerMenuList";
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/components/Header/styles.scss";
</style>
