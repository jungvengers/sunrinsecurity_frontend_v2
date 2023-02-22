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
          :to="{ query: { name: i.name.toLowerCase() } }"
          class="club_list_item"
          :class="{
            active:
              i.name.toLowerCase() === route.query.name ||
              (!route.query.name && n === 0),
          }"
          >{{ i.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import clubData from "~~/constants/clubData";
import { getClubList } from "~~/composables/club";
import { getQuestionList } from "~~/composables/apply";

const route = useRoute();
const router = useRouter();

const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.name as string;
  return clubData[name] || clubData.layer7;
});

const questionList = Object.values(
  await getQuestionList(
    clubList.filter((i) => i.name === club.value.name)[0].id | 1,
  ),
)
  .filter((i) => i !== null)
  .slice(1);
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/club/styles.scss";

.sub_title {
  cursor: pointer;
}
</style>
