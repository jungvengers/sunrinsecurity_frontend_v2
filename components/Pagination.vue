<template>
  <div class="pagination">
    <div class="pagination_num_wrap">
      <img
        src="@/assets/images/arrow_left.svg"
        class="pagination_arrow"
        @click="changePage(Math.max(pageId, 2) - 1)"
      />
      <template v-for="(i, n) in Math.min(pageCount, 5)" :key="n">
        <div
          class="pagination_num"
          :class="{ pagination_num_active: pageStart + i === pageId }"
          @click="changePage(pageStart + i)"
        >
          {{ pageStart + i }}
        </div>
      </template>
      <img
        src="@/assets/images/arrow_right.svg"
        class="pagination_arrow"
        @click="changePage(Math.min(pageId, pageCount - 1) + 1)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  pageCount: {
    type: Number,
    required: true,
  },
});
const route = useRoute();
const router = useRouter();

const changePage = async (page: number) => {
  await router.push({ query: { page: page } });
};

const pageId = computed(() => {
  return parseInt(route.query.page as string) || 1;
});
const pageStart = computed(() => {
  return Math.max(Math.min(pageId.value - 3, props.pageCount - 5), 0);
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/components/Pagination/styles.scss";
</style>
