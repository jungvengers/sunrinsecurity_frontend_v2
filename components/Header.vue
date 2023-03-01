<template>
  <header>
    <input id="toggle" type="checkbox" />
    <div>
      <NuxtLink :to="'/'" class="header_logo_link"
        ><img class="header_logo" src="@/assets/images/logo.svg"
      /></NuxtLink>
      <div class="sidebar">
        <NuxtLink :to="'/'" class="header_menu sidebar_logo_link"
          ><img
            class="header_logo"
            src="@/assets/images/logo.svg"
          />정보보호과</NuxtLink
        >
        <NuxtLink
          v-for="(i, n) in headerMenuList"
          :key="n"
          class="header_menu"
          :to="i.path"
          >{{ i.name }}</NuxtLink
        >
      </div>
      <label class="sidebar_background" for="toggle"></label>
      <label class="header_toggle" for="toggle">
        <img src="@/assets/images/menu.svg" alt="햄버거" />
      </label>
      <NuxtLink
        v-if="!authStore.accessToken"
        to="/login"
        class="header_login header_menu"
        >로그인</NuxtLink
      >
      <NuxtLink v-else class="header_login header_menu" @click="_logout()">
        로그아웃
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import headerMenuList from "~~/constants/headerMenuList";
import { useAuthStore } from "~~/store/auth";
import { useAdminStore } from "~~/store/admin";
import { logout } from "~~/api/auth";

const authStore = useAuthStore();
const adminStore = useAdminStore();
const _logout = () => {
  logout();
  authStore.setAccessToken("");
  adminStore.role = "none";
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/components/Header/styles.scss";
</style>
