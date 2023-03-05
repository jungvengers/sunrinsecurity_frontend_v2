<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #1b1b1b;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}
</style>
