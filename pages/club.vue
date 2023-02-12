<template>
  <div class="club">
    <div class="title_panel">
      <div>
        <h1 class="title">동아리 소개</h1>
        <h2 class="sub_title">
          정보보호과 내에서 운영 중인 동아리에 대한 정보를 찾아볼 수 있습니다.
        </h2>
      </div>
    </div>
    <div class="club_panel">
      <img :src="club.image" class="club_image" />
      <div class="club_description">
        <h1 class="name">{{ club.name }}</h1>
        <div class="description">
          <p>소개</p>
          <p>{{ club.description }}</p>
        </div>
        <div class="curriculum">
          <p>커리큘럼</p>
          <p>{{ club.curriculum }}</p>
        </div>
        <div class="contact">
          <a :href="club.site" target="_blank">
            <img src="@/assets/images/site.svg" />
          </a>
          <a :href="club.facebook" target="_blank">
            <img src="@/assets/images/facebook.svg" />
          </a>
        </div>
      </div>
    </div>
    <div class="club_list">
      <div class="club_list_panel">
        <NuxtLink
          v-for="(i, n) in clubList"
          :key="n"
          :to="{ query: { name: i.toLowerCase() } }"
          class="club_list_item"
          :class="{
            active:
              i.toLowerCase() === route.query.name ||
              (!route.query.name && n === 0),
          }"
          >{{ i }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ObjectType } from "typescript";
import clubData from "~~/constants/clubData";

const route = useRoute();
const router = useRouter();

const clubList = ["Layer7", "Unifox", "Teamlog", "Nefus", "Emotion"];
const club = computed(() => {
  const name = route.query.name as string;
  return clubData[name] || clubData.layer7;
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/club/styles.scss";
</style>
