<template>
  <div class="project">
    <div class="title_panel">
      <h1 class="title">프로젝트 전시장</h1>
      <h2 class="sub_title">
        정보보호과 학생들이 진행한 프로젝트를 확인할 수 있는 페이지입니다.
      </h2>
    </div>
    <div class="project_panel">
      <div v-for="(content, n) in contents" :key="n" class="project_item">
        <div class="img_panel">
          <img
            src="https://cdn.discordapp.com/attachments/808385907857031199/1060106010490056764/image.png"
          />
        </div>
        <div class="content_panel">
          <p class="title">{{ content.title }}</p>
          <div>
            <p><span>참여 동아리</span> {{ content.club }}</p>
            <p><span>참가자</span> {{ content.paticipate }}</p>
            <p><span>분야</span> {{ content.kind }}</p>
            <p>
              <span>한 줄 소개</span>
              {{ content.instruction }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Pagination :page-count="pageCount" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const contents = [
  {
    id: 1,
    title: "project 1",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 2,
    title: "project 2",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 3,
    title: "project 3",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 4,
    title: "project 4",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
];
const pageCount = 11;
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/project/styles.scss";
</style>
