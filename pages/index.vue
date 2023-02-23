<template>
  <div class="background_img">
    <div class="main_panel">
      <div class="title">
        <p class="sub_title">선린인터넷고등학교</p>
        <h1 class="main_title">
          정보보호과
          <img src="@/assets/images/logo.svg" />
        </h1>
        <p class="sub_title">Computer-Security</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "index-page",
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/index/styles.scss";
</style>
