<template>
  <div class="columns">
    <div
      v-for="(column, n) in columns"
      :key="n"
      class="column"
      :style="{ ...(sizes[n] ?? { flex: 1 }) }"
    >
      {{ column }}
    </div>
  </div>
  <div v-for="(item, i) in data" :key="i" class="item" @click="onClick(i)">
    <p
      v-for="(detail, j) in item"
      :key="j"
      :style="{ ...(sizes[j] ?? { flex: 1 }) }"
    >
      {{ detail }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const emit = defineEmits(["click-item"]);

const props = defineProps({
  columns: {
    type: Array<string>,
    required: true,
  },
  sizes: {
    type: Array<object>,
    required: true,
  },
  data: {
    type: Array<Array<string>>,
    required: true,
  },
});

function onClick(idx: number) {
  // console.log("clicked", idx);
  emit("click-item", idx);
}
</script>

<style scoped>
.columns {
  display: flex;
  margin-top: 12px;
  padding: 12px 0;
  gap: 32px;
  color: #a3a3a3;
}

.item {
  display: flex;
  padding: 12px 0;
  gap: 32px;
  border-top: 1px solid #262626;
  color: #d9d9d9;
  cursor: pointer;
}
</style>
