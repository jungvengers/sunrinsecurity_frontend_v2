<template>
  <div class="project">
    <div class="title_panel">
      <div>
        <h1 class="title">프로젝트 전시장</h1>
        <h2 class="sub_title">
          정보보호과 학생들이 진행한 프로젝트를 확인할 수 있는 페이지입니다.
        </h2>
      </div>
      <button class="write_notice" @click="router.push('/project/write')">
        글쓰기
      </button>
    </div>
    <div class="project_panel">
      <div
        v-for="(content, n) in projectList"
        :key="n"
        class="project_item"
        @click="router.push(`/project/${content.id}`)"
      >
        <div class="img_panel">
          <img :src="content.image" />
        </div>
        <div class="content_panel">
          <p class="title">{{ content.name }}</p>
          <div>
            <p><span>참여 동아리</span> {{ content.club }}</p>
            <p><span>참가자</span> {{ content.participant }}</p>
            <p><span>분야</span> {{ content.type }}</p>
            <p>
              <span>소개</span>
              {{ content.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Pagination :page-count="pageCount" />
  </div>
</template>

<script lang="ts" setup>
import { ProjectList } from "~~/interfaces/project.interface";

const router = useRouter();
const route = useRoute();

const page = computed(() => parseInt(route.query.page as string) || 1);
const projectList = ref<ProjectList[]>([]);
const pageCount = ref<number>(1);

watchEffect(async () => {
  const { items, count } = await getProjectList(page.value);
  projectList.value = items;
  pageCount.value = count;
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/project/index/styles.scss";
</style>
