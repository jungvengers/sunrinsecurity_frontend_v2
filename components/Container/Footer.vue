<template>
  <div class="footer_panel">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.footer_panel {
  display: flex;
  padding: 24px 32px;
  border-top: 1px solid #262626;
  justify-content: center;
  gap: 24px;
}
</style>
