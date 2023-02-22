<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ content.name }}</h1>
        <h2 class="sub_title" @click="router.push('/notice')">
          &lt; 프로젝트 전시장 페이지로
        </h2>
      </div>
      <div class="info">
        <span>
          <p><span>동아리</span> {{ content.club }}</p>
          <p><span>참가자</span> {{ content.participant }}</p>
        </span>
        <span>
          <p><span>분야</span> {{ content.type }}</p>
          <p><span>소개</span> {{ content.description }}</p>
        </span>
      </div>
    </div>
    <div class="notice_detail_panel">
      <p class="content" v-html="content.content"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const content = await getProjectDetail(
  router.currentRoute.value.params.id as string,
);
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";

span {
  display: flex;
  gap: 24px;
}
</style>
