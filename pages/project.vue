<template>
  <div class="project">
    <div class="title_panel">
      <h1 class="title">프로젝트 전시장</h1>
      <h2 class="sub_title">
        정보보호과 학생들이 진행한 프로젝트를 확인할 수 있는 페이지입니다.
      </h2>
    </div>
    <div class="project_panel">
      <div v-for="(i, n) in 6" :key="n" class="project_item">
        <div></div>
        <div>
          <p>{{ content[i - 1 + pagenation].title }}</p>
          <p><span>참여 동아리</span> {{ content[i - 1 + pagenation].club }}</p>
          <p>
            <span>참가자</span> {{ content[i - 1 + pagenation].paticipate }}
          </p>
          <p><span>분야</span> {{ content[i - 1 + pagenation].kind }}</p>
          <p>
            <span>한 줄 소개</span>
            {{ content[i - 1 + pagenation].instruction }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const content = [
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
  {
    id: 5,
    title: "project 5",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 6,
    title: "project 6",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 7,
    title: "project 7",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 8,
    title: "project 8",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 9,
    title: "project 9",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 10,
    title: "project 10",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
  {
    id: 11,
    title: "project 11",
    club: "club",
    paticipate: "participate",
    kind: "kind",
    instruction: "instruction",
  },
];

const pagenation = ref(0);
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/project/styles.scss";
</style>
