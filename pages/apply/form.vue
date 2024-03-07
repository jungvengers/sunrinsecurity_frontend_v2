<template>
  <div class="form">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ club?.name ?? "동아리" }} 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다.</h2>
      </div>
    </div>
    <Loading v-if="!(clubList && info)" />
    <div v-else class="form_panel">
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
      <NuxtLink :to="'/apply'">
        <button>
          취소
          <img src="@/assets/images/close.svg" />
        </button>
      </NuxtLink>
      <button v-if="route.query.edit" @click="_delete()">삭제</button>
      <button @click="submit()">
        저장
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
import { ClubList } from "~~/interfaces/club.interface";
import { AxiosError } from "axios";
import { Form } from "~~/interfaces/apply.interface";

const route = useRoute();
const router = useRouter();

const info = ref();
const clubList = ref<ClubList>();
const club = computed(() => {
  const name = route.query.club as string;
  if (!clubList.value) return undefined;
  return clubList.value.find((x) => x.name == name) || clubList.value[0];
});
const clubId = computed(() => club.value?.id ?? 1);
const questionList = ref<string[]>([]);

const phone = ref("");
const id = computed(() =>
  info.value
    ? info.value.grade +
      ("0" + info.value.class).slice(-2) +
      ("0" + info.value.number).slice(-2)
    : "",
);

const answers = ref<{ [key: string]: string }>({
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
});

watchEffect(() => {
  getUserInfo()
    .then((res) => {
      info.value = res;
    })
    .catch(() => router.push("/login"));
  getClubList().then(async (res) => {
    clubList.value = res;
    (async () => {
      questionList.value = await getQuestions(clubId.value);
    })();
    (async () => {
      const answer = await getAnswer(clubId.value);
      phone.value = answer.phone ?? "";
      if (answer) {
        for (let i = 0; i < 10; i++) {
          answers.value[Answers[i]] = answer[Answers[i]];
        }
      }
    })();
  });
});

const submit = async () => {
  if (!club.value) {
    return void alert(
      "동아리가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.",
    );
  }
  const form: FormAnswer = {
    clubid: club.value.id,
    ...answers.value,
    phone: phone.value,
  };
  const res = route.query.edit
    ? await editAnswer(clubId.value, form)
    : await createAnswer(form);
  if (res.statusCode === 400) alert(res.message);
  if (res.statusCode === 403) alert("동아리 지원 기간이 아닙니다.");
  router.push("/apply");
};

const _delete = async () => {
  const res = await deleteAnswer(clubId.value);
  if (res.statusCode === 400) alert(res.message);
  router.push("/apply");
};

async function getQuestions(id: number) {
  const questions = await getQuestionList(id);
  if (questions instanceof AxiosError) {
    if (questions.response?.status === 403) {
      alert("동아리 지원 기간이 아닙니다.");
      router.push("/");
    }
  } else {
    return Questions.map((x) => questions[x]).filter((x) => x);
  }
}

const getMaxLength = (i: string): number | undefined => {
  const lastI = i.substring(i.indexOf("(") + 1, i.length);
  if (lastI.includes("이내")) return parseInt(lastI);
  else if (lastI.includes("내외")) return parseInt(lastI) + 50;
  else NaN;
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/form/styles.scss";
</style>
