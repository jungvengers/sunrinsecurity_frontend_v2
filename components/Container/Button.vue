<template>
  <button class="btn" :style="{ 'background-color': color }" @click="onClick">
    {{ title }}
    <img v-if="icon" :src="icon" />
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null,
  },
  color: {
    type: String,
    required: false,
    default: null,
  },
  icon: {
    type: String,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};

defineExpose({
  onClick,
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 12px 20px;
  background-color: #262626;
  color: #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
