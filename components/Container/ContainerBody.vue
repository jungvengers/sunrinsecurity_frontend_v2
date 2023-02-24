<template>
  <div class="body_panel">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.body_panel {
  display: flex;
  padding: 32px;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
