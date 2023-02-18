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
          @click="
            router.push({ path: '/apply/form', query: { club: club.name } })
          "
        >
          <div class="apply_club_image">
            <img :src="club.image" class="club_image" />
          </div>
          <p>{{ club.name }}</p>
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

const route = useRoute();
const router = useRouter();

const clubList = ["Layer7", "Unifox", "Teamlog", "Nefus", "Emotion"];
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/index/styles.scss";
</style>
