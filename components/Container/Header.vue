<template>
  <div class="header_panel">
    <h1 class="title">{{ props.title }}</h1>
    <h2 class="sub_title">{{ props.subTitle }}</h2>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Hello",
  },
  subTitle: {
    type: String,
    default: "Container Test",
  },
});
</script>

<style lang="scss" scoped>
.header_panel {
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  background-color: #222222;
}
</style>

<style lang="scss">
.title {
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
}

.sub_title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #a3a3a3;
}
</style>
