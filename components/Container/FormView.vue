<template>
  <div class="input_panel">
    <div class="label_wrapper">
      <p class="label">{{ props.label }}</p>
      <p class="count">{{ props.value.length }}자 (공백포함)</p>
    </div>
    <div class="input" type="text">{{ props.value }}</div>
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
    word-break: break-all;
    resize: vertical;
  }

  .label_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 4px;
    }

    p {
      color: #d9d9d9;
      font-size: 16px;

      &:last-child {
        font-size: 14px;
      }
    }
  }
}
</style>
