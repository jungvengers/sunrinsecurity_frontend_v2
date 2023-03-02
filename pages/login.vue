<template>
  <div class="admin_login">
    <h1>정보보호과<img src="@/assets/images/logo.svg" /></h1>
    <div class="button_panel">
      <a class="google" :href="config.public.BaseUrl + '/auth/google'">
        학교 계정으로 로그인
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/admin/login/styles.scss";
</style>
