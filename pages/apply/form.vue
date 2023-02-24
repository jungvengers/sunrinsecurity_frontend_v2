<template>
  <div class="form">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ club.name }} 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다.</h2>
      </div>
    </div>
    <div class="form_panel">
      <div class="line">
        <div class="input_panel">
          <p>학번</p>
          <input
            :value="id"
            type="text"
            placeholder="학번을 입력하세요"
            readonly
          />
        </div>
        <div class="input_panel">
          <p>이름</p>
          <input
            :value="info.username"
            type="text"
            placeholder="이름을 입력하세요"
            readonly
          />
        </div>
      </div>
      <div class="line">
        <div class="input_panel">
          <p>전화번호</p>
          <input
            v-model="phone"
            type="text"
            placeholder="전화번호를 입력하세요"
          />
        </div>
        <div class="input_panel">
          <p>학교 이메일</p>
          <input
            :value="info.email"
            type="text"
            placeholder="이름을 입력하세요"
            readonly
          />
        </div>
      </div>

      <template v-for="(i, n) in questionList" :key="n">
        <div class="line">
          <div class="input_panel">
            <p>{{ i }}</p>
            <textarea
              v-model="answers[Answers[n]]"
              type="text"
              :placeholder="`답변을 입력하세요`"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="submit_panel">
      <button v-if="route.query.edit" @click="_delete()">삭제</button>
      <button @click="submit()">
        제출
        <img src="@/assets/images/check.svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClubList } from "~~/composables/club";
import { getQuestionList, getAnswer } from "~~/composables/apply";
import { createAnswer, editAnswer, deleteAnswer } from "~~/api/apply";
import { Answers, FormAnswer, Questions } from "~~/interfaces/apply.interface";

const route = useRoute();
const router = useRouter();

const info = await getUserInfo();
const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.club as string;
  return clubList.find((x) => x.name == name) || clubList[0];
});
const clubId = club.value.id ?? 1;
const questionList = await getQuestions(clubId);
const answer = await getAnswer(clubId);

const phone = ref(answer.phone ?? "");
const id = computed(
  () =>
    info.grade + ("0" + info.class).slice(-2) + ("0" + info.number).slice(-2),
);

const answers: { [key: string]: string } = {
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answer5: "",
  answer6: "",
  answer7: "",
  answer8: "",
  answer9: "",
  answer10: "",
};

if (answer) {
  for (let i = 0; i < 10; i++) {
    answers[Answers[i]] = answer[Answers[i]];
  }
}

const submit = async () => {
  const answer: FormAnswer = {
    clubid: clubList.filter((i) => i.name === club.value.name)[0].id,
    ...answers,
    phone: phone.value,
  };
  const res = route.query.edit
    ? await editAnswer(clubId, answer)
    : await createAnswer(answer);
  if (res.statusCode === 400) alert(res.message);
  router.push("/apply");
};

const _delete = async () => {
  const res = await deleteAnswer(clubId);
  if (res.statusCode === 400) alert(res.message);
  router.push("/apply");
};

async function getQuestions(id: number) {
  const questions = await getQuestionList(id);
  return Questions.map((x) => questions[x]).filter((x) => x);
  // return Object.entries(await getQuestionList(id))
  //   .filter((x) => Questions.includes(x[0]))
  //   .filter((x) => x[1])
  //   .map((x) => x[1]);
}

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/form/styles.scss";
</style>
