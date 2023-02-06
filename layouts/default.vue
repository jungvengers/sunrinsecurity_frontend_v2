<template>
  <div id="app">
    <Header />
    <div class="main">
      <div class="panel" :class="`${route.path.substring(1)}`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style lang="scss">
@import "~~/assets/styles/layouts/default/styles.scss";
</style>
