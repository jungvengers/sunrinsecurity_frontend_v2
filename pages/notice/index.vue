<template>
  <div class="notice">
    <div class="title_panel">
      <div>
        <h1 class="title">학과소식</h1>
        <h2 class="sub_title">
          정보보호과 내에서 진행하는 행사 등 각종 소식입니다.
        </h2>
      </div>
      <button
        v-if="store.role !== 'none'"
        class="write_notice"
        @click="router.push('/notice/write')"
      >
        글쓰기
      </button>
    </div>
    <div class="notice_list_panel">
      <div class="category">
        <div
          v-for="(noticeCategory, n) in noticeCategoryList"
          :key="n"
          class="category_item"
        >
          {{ noticeCategory }}
        </div>
      </div>
      <div
        v-for="(noticeItem, n) in noticeList"
        :key="n"
        class="notice_list_item"
        @click="router.push(`/notice/${noticeItem.id}`)"
      >
        <p>{{ noticeItem.id }}</p>
        <p>{{ noticeItem.title }}</p>
        <p>{{ noticeItem.author }}</p>
        <p>{{ new Date(noticeItem.createdAt).toLocaleDateString("ko-kr") }}</p>
      </div>
    </div>
    <Pagination :page-count="pageCount" />
  </div>
</template>

<script lang="ts" setup>
import noticeCategoryList from "~~/constants/noticeCategoryList";
import { getNoticeList } from "~~/composables/notice";
import { NoticeList } from "~~/interfaces/notice.interface";
import { useAdminStore } from "~~/store/admin";

const router = useRouter();
const route = useRoute();
const store = useAdminStore();

const page = computed(() => parseInt(route.query.page as string) || 1);
const noticeList = ref<NoticeList[]>([]);
const pageCount = ref<number>(0);

watchEffect(async () => {
  const { items, count } = await getNoticeList(page.value);
  noticeList.value = items;
  pageCount.value = count;
});

definePageMeta({
  middleware: ["admin"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/index/styles.scss";
</style>
