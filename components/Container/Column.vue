<template>
  <div class="column">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
