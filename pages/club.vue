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
    <div v-if="!club" class="loading_wrapper"><Loading /></div>
    <div v-else class="club_panel">
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
          <a
            v-for="(x, i) in club.links"
            :key="i"
            :href="x.link"
            target="_blank"
          >
            <img :src="x.image" />
          </a>
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
import { ClubList } from "~~/interfaces/club.interface";

const route = useRoute();

const clubList = ref<ClubList>();
const club = computed(() => {
  const name = route.query.name as string;
  return (
    clubList.value?.find((x) => x.name.toLowerCase() == name) ||
    clubList.value?.[0]
  );
});

watchEffect(async () => {
  clubList.value = await getClubList();
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/club/styles.scss";

.loading_wrapper {
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
