<template>
  <div class="club">
    <div class="title_panel">
      <div>
        <h1 class="title">동아리별 질문</h1>
        <h2 class="sub_title" @click="router.push('/apply')">
          &lt; 동아리 지원 페이지로
        </h2>
      </div>
    </div>
    <div class="club_panel">
      <img :src="club.image" class="club_image" />
      <div class="club_description">
        <h1 class="name">{{ club.name }}</h1>
        <div v-for="(i, n) in questionList" :key="n" class="question">
          <p>질문 {{ n + 1 }}</p>
          <p>{{ i }}</p>
        </div>
      </div>
    </div>
    <div class="club_list">
      <div class="club_list_panel">
        <NuxtLink
          v-for="(i, n) in clubList"
          :key="n"
          :to="{ query: { name: i.name } }"
          class="club_list_item"
          :class="{
            active:
              i.name === route.query.name || (!route.query.name && n === 0),
          }"
          >{{ i.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClubList } from "~~/composables/club";
import { getQuestionList } from "~~/composables/apply";
import { Questions } from "~~/interfaces/apply.interface";
import { AxiosError } from "axios";

const route = useRoute();
const router = useRouter();

const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.name as string;
  return clubList.find((x) => x.name == name) || clubList[0];
});

const questionList = ref();

// get questionList one more when change query
watch(
  () => route.query.name,
  () => getQuestions(club.value.id ?? 1).then((x) => (questionList.value = x)),
  { immediate: true },
);

// questions to array
async function getQuestions(id: number) {
  const questions = await getQuestionList(id);
  if (questions instanceof AxiosError) {
    if (questions.response?.status == 403) {
      alert("동아리 지원 기간이 아닙니다.");
      router.push("/");
    }
  } else {
    return Questions.map((x) => questions[x]).filter((x) => x);
  }
}
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/club/styles.scss";

.sub_title {
  cursor: pointer;
}
</style>
