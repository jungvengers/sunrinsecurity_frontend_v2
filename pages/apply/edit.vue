<template>
  <div class="form">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ club.name }} 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다. 모든 동아리 질문은 띄어쓰기 포함입니다.</h2>
      </div>
    </div>
    <div class="form_panel">
      <template v-for="(i, n) in 10" :key="n">
        <div class="line">
          <div class="input_panel">
            <p>{{ `질문 ${n + 1}` }}</p>
            <textarea
              v-model="questions[Questions[n]]"
              type="text"
              :placeholder="`답변을 입력하세요`"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="submit_panel">
      <NuxtLink :to="'/apply'">
        <button>
          취소
          <img src="@/assets/images/close.svg" />
        </button>
      </NuxtLink>
      <button @click="submit()">
        수정
        <img src="@/assets/images/check.svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClubList } from "~~/composables/club";
import { getQuestionList } from "~~/composables/apply";
import { editForm } from "~~/api/apply";
import { Question, Questions, UpdateForm } from "~~/interfaces/apply.interface";
import { AxiosError } from "axios";

const route = useRoute();
const router = useRouter();

const loading = ref(true);

const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.club as string;
  return (
    clubList.find((x) => x.name.toLowerCase() == name.toLowerCase()) ||
    clubList[0]
  );
});
const clubId = club.value.id ?? 1;
const questionList = await getQuestions(clubId);

loading.value = false;

const questions: Question = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
};

for (let i = 0; i < 10; i++) {
  questions[Questions[i]] = questionList[i];
}

const submit = async () => {
  const update: UpdateForm = {
    clubid: club.value.id,
    ...questions,
  };
  const res = await editForm(clubId, update);
  if (res.statusCode === 400) alert(res.message);
  router.push("/apply");
};

async function getQuestions(id: number) {
  const questions = await getQuestionList(id);
  if (!(questions instanceof AxiosError)) {
    return Questions.map((x) => questions[x]).filter((x) => x);
  }
  return [];
}

definePageMeta({
  middleware: ["auth", "admin"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/form/styles.scss";
</style>
