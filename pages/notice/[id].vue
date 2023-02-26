<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div class="title_panel_left">
        <h1 class="title">{{ content.title }}</h1>
        <h2 class="sub_title" @click="router.push('/notice')">
          &lt; 학과소식 페이지로
        </h2>
      </div>
      <div class="info">
        <p><span>작성자</span> {{ content.author }}</p>
        <p>
          <span>작성일</span>
          {{ new Date(content.createdAt).toLocaleDateString("ko-kr") }}
        </p>
      </div>
    </div>
    <div class="notice_detail_panel">
      <p class="content" v-html="content.content" />
    </div>
    <div class="notice_function">
      <button
        v-if="admin.isAdmin"
        class="btn"
        @click="router.push({ query: { id }, path: `/notice/edit` })"
      >
        수정하기
      </button>
      <button v-if="admin.isAdmin" class="btn" @click="_delete()">
        삭제하기
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { deleteNotice } from "~~/api/notice";
import { useAdminStore } from "~~/store/admin";

const router = useRouter();
const route = useRoute();

const admin = useAdminStore();

const id = computed(() => route.params.id as string);

const content = await getNoticeDetail(id.value);

const _delete = async () => {
  const res = await deleteNotice(Number(id.value));
  if (res.status === 200) {
    router.push(`/project`);
  } else {
    alert("삭제에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";
</style>
