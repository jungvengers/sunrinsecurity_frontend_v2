<template>
  <div class="field">
    <p>{{ props.title }}</p>
    <p>{{ props.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Hello",
  },
  desc: {
    type: String,
    default: "Container Test",
  },
});
</script>

<style lang="scss" scoped>
.field {
  :first-child {
    margin-bottom: 4px;
    color: #a3a3a3;
    font-size: 16px;
    font-weight: 500;
  }

  * {
    color: #d9d9d9;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
}
</style>
