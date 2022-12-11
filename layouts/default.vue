<template>
  <div id="app">
    <Header />
    <div class="main">
      <div class="panel">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~~/assets/styles/layouts/default/styles.scss";
</style>
