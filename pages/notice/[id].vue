<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div>
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
      <p class="content">{{ content.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { getNoticeDetail } from "~~/composables/notice";

const router = useRouter();
const content = await getNoticeDetail(
  router.currentRoute.value.params.id as string,
);
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";
</style>
