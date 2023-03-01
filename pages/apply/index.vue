<template>
  <div class="apply">
    <div class="title_panel">
      <div>
        <h1 class="title">동아리 지원</h1>
        <h2 class="sub_title">동아리에 지원할 수 있습니다.</h2>
      </div>
    </div>
    <div v-if="!clubList" class="loading_wrapper"><Loading /></div>
    <div v-else class="apply_panel">
      <template v-for="(club, n) in clubList" :key="n">
        <div
          class="apply_club_panel"
          :class="{ active: isApply(club.name) }"
          @click="apply(club.name)"
        >
          <div class="apply_club_image">
            <img
              v-if="isApply(club.name)"
              src="~/assets/images/apply.svg"
              class="apply_image"
            />
            <img :src="club.image" class="club_image" />
          </div>
          <p>
            {{ club.name }}
            <img v-if="isApply(club.name)" src="~/assets/images/edit.svg" />
          </p>
        </div>
      </template>
    </div>
    <div class="preview">
      <button
        v-if="admin.isAdmin"
        @click="
          router.push({ query: { club: admin.role }, path: '/apply/admin' })
        "
      >
        동아리 질문 수정하기
      </button>
      <button v-else @click="router.push('/apply/preview')">
        동아리별 질문 미리보기
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getApplyList } from "~~/composables/apply";
import { ApplyList } from "~~/interfaces/apply.interface";
import { ClubList } from "~~/interfaces/club.interface";
import { useAdminStore } from "~~/store/admin";

const route = useRoute();
const router = useRouter();

const admin = useAdminStore();

const applyList = ref<ApplyList[]>();
const clubList = ref<ClubList>();

watchEffect(async () => {
  applyList.value = await getApplyList();
  clubList.value = await getClubList();
});

const isApply = (club: string) => {
  return (applyList.value?.filter((i) => i.club.name === club).length ?? 0) > 0;
};

const apply = (club: string) => {
  const edit = isApply(club) ? "true" : undefined;
  router.push({ path: "/apply/form", query: { club, edit } });
};

definePageMeta({
  middleware: ["auth", "admin"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/apply/index/styles.scss";

.loading_wrapper {
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
