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
      <NuxtLink
        v-if="!authStore.accessToken"
        to="/login"
        class="header_login header_menu"
        >로그인</NuxtLink
      >
      <NuxtLink v-else class="header_login header_menu" @click="logout()">
        로그아웃
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import headerMenuList from "~~/constants/headerMenuList";
import { useAuthStore } from "~~/store/auth";

const authStore = useAuthStore();
const logout = () => {
  console.log("logout");
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/components/Header/styles.scss";
</style>
