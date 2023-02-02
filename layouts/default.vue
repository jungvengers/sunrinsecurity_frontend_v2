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

<script lang="ts" setup></script>

<style lang="scss">
@import "~~/assets/styles/layouts/default/styles.scss";
</style>
