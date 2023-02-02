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
          {{ new Date(content.date).toLocaleDateString("ko-kr") }}
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
const router = useRouter();
const content = {
  id: 1,
  title: "notice 1",
  author: "망냥냥냥",
  date: "2022-12-11T08:27:09.200Z",
  content: "asdfasdfasdfasdfasdfasdfasdfasdasdfsdffsfsdfsdfsdfasdf\nasdfsdfa",
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";
</style>
