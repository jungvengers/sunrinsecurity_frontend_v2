<template>
  <div class="input_panel">
    <p class="label">{{ props.label }}</p>
    <input
      class="input"
      type="text"
      :value="props.value"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "Hello",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "Input",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.input_panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  .input {
    padding: 16px 20px;
    border-radius: 8px;
    font-size: 16px;
    background-color: #262626;
    color: #ffffff;
    resize: vertical;
  }

  .label {
    color: #d9d9d9;
    font-size: 16px;
  }
}
</style>
