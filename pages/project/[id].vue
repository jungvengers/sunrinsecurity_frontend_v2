<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ content.name }}</h1>
        <h2 class="sub_title" @click="router.push('/project')">
          &lt; 프로젝트 전시장 페이지로
        </h2>
      </div>
      <div class="info">
        <span>
          <p><span>동아리</span> {{ content.club }}</p>
          <p><span>참가자</span> {{ content.participants }}</p>
        </span>
        <span>
          <p><span>분야</span> {{ content.type }}</p>
          <p><span>소개</span> {{ content.description }}</p>
        </span>
      </div>
    </div>
    <div class="notice_detail_panel">
      <p class="content" v-html="content.detail"></p>
      <div class="attachments">
        <p>첨부파일 {{ content.attach.length }}</p>
        <div v-for="(attachment, n) in content.attach" :key="n">
          <a :href="attachment" target="_blank">
            <img src="~~/assets/images/file.svg" />
            {{ attachment.split("/").pop() }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const content = await getProjectDetail(route.params.id as string);
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";

span {
  display: flex;
  gap: 24px;
}

.attachments {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 16px;
    font-weight: $font_medium;
    color: $grayscale_50;
  }

  div {
    display: flex;
    gap: 12px;

    a {
      padding: 8px 16px;
      background-color: $grayscale_40;
      border-radius: 8px;
      color: $grayscale_50;

      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
    }
  }
}
</style>
