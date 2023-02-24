<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({});
</script>

<style lang="scss" scoped>
.btn {
  padding: 12px 20px;
  background-color: #262626;
  color: #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>
