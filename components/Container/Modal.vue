<template>
  <div class="modal">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding: 24px;
}
</style>
