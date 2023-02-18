<template>
  <div class="form">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ currentClub }} 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다.</h2>
      </div>
    </div>
    <div class="form_panel">
      <div class="line">
        <div class="input_panel">
          <p>학번</p>
          <input type="text" />
        </div>
        <div class="input_panel">
          <p>이름</p>
          <input type="text" />
        </div>
      </div>
      <div class="line">
        <div class="input_panel">
          <p>전화번호</p>
          <input type="text" />
        </div>
        <div class="input_panel">
          <p>학교 이메일</p>
          <input type="text" />
        </div>
      </div>
      <template v-for="(i, n) in questionList" :key="n">
        <div class="line">
          <div class="input_panel">
            <p>{{ i.question }}</p>
            <input
              type="text"
              :placeholder="`답변을 입력하세요 (최대 ${i.maxLength}자)`"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="submit_panel">
      <button>
        제출
        <img src="@/assets/images/check.svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import clubData from "~~/constants/clubData";

const route = useRoute();
const router = useRouter();

const clubList = ["Layer7", "Unifox", "Teamlog", "Nefus", "Emotion"];

const currentClub = clubList.includes(route.query.club as string)
  ? (route.query.club as string)
  : router.push("/apply");

const questionList = [
  {
    question: "질문1",
    maxLength: 600,
  },
  {
    question: "질문2",
    maxLength: 400,
  },
  {
    question: "질문3",
    maxLength: 500,
  },
  {
    question: "질문4",
    maxLength: 300,
  },
  {
    question: "질문5",
    maxLength: 200,
  },
];
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/form/styles.scss";
</style>
