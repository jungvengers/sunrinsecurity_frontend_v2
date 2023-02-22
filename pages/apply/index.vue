<template>
  <div class="apply">
    <div class="title_panel">
      <div>
        <h1 class="title">동아리 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다.</h2>
      </div>
    </div>
    <div class="apply_panel">
      <template v-for="(club, n) in clubData" :key="n">
        <div
          class="apply_club_panel"
          :class="{ active: checkApply(club.name) }"
          @click="
            applying(club.name, checkApply(club.name) ? 'true' : undefined)
          "
        >
          <div class="apply_club_image">
            <img
              v-if="checkApply(club.name)"
              src="~/assets/images/apply.svg"
              class="apply_image"
            />
            <img :src="club.image" class="club_image" />
          </div>
          <p>
            {{ club.name }}
            <img v-if="checkApply(club.name)" src="~/assets/images/edit.svg" />
          </p>
        </div>
      </template>
    </div>
    <div class="preview">
      <button @click="router.push('/apply/preview')">
        동아리별 질문 미리보기
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import clubData from "~~/constants/clubData";
import { getApplyList } from "~~/composables/apply";

const route = useRoute();
const router = useRouter();

const clubList = ["Layer7", "Unifox", "Teamlog", "Nefus", "Emotion"];
const applyList = await getApplyList();

const checkApply = (club: string) => {
  return applyList.filter((i) => i.club.name === club).length > 0;
};

const applying = (club: string, edit?: string) => {
  router.push({ path: "/apply/form", query: { club, edit } });
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/index/styles.scss";
</style>
