<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div>
        <h1 class="title">{{ content?.name }}</h1>
        <h2 class="sub_title" @click="router.push('/project')">
          &lt; 프로젝트 전시장 페이지로
        </h2>
      </div>
      <!-- 해당 부분 모바일에서 팝업으로 변경 -->
      <div class="info">
        <span>
          <p><span>동아리</span> {{ content?.club }}</p>
          <p><span>참가자</span> {{ content?.participants }}</p>
        </span>
        <span>
          <p><span>분야</span> {{ content?.type }}</p>
          <p><span>소개</span> {{ content?.description }}</p>
        </span>
      </div>
    </div>
    <div v-if="!content" class="loading_wrapper"><Loading /></div>
    <div v-else class="notice_detail_panel">
      <p class="content" v-html="content.detail"></p>
      <div class="attachments">
        <p>첨부파일 {{ content.attach.length }}</p>
        <div v-for="(attachment, n) in content.attach" :key="n">
          <a :href="attachment" target="_blank">
            <img src="~~/assets/images/file.svg" />
            {{ attachment.split("/").pop() }}</a
          >
        </div>
      </div>
    </div>
    <div class="notice_function">
      <div class="paging">
        <NuxtLink :to="prev">
          <button class="btn">
            <img src="@/assets/images/arrow_back.svg" />
            이전 글
          </button>
        </NuxtLink>
        <NuxtLink :to="next">
          <button class="btn">
            다음 글
            <img src="@/assets/images/arrow_forward.svg" />
          </button>
        </NuxtLink>
      </div>
      <div v-if="admin.isClub" class="admin">
        <NuxtLink :to="{ query: { id }, path: `/project/edit` }">
          <button class="btn">수정하기</button>
        </NuxtLink>
        <button class="btn" @click="_delete()">삭제하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { deleteProject } from "~~/api/project";
import { ProjectDetail } from "~~/interfaces/project.interface";
import { useAdminStore } from "~~/store/admin";

const route = useRoute();
const router = useRouter();

const admin = useAdminStore();

const id = computed(() => route.params.id as string);
const prev = computed(() => `/project/${Math.max(1, Number(id.value) - 1)}`);
const next = computed(() => `/project/${Number(id.value) + 1}`);

const content = ref<ProjectDetail>();

watchEffect(async () => {
  content.value = await getProjectDetail(id.value);
  if (!content.value) {
    router.push("/project");
  }
});

const _delete = async () => {
  const res = await deleteProject(Number(id.value));
  if (res.status === 200) {
    router.push(`/project`);
  } else {
    alert("삭제에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";

span {
  display: flex;
  gap: 24px;
}

.attachments {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 16px;
    font-weight: $font_medium;
    color: $grayscale_50;
  }

  div {
    display: flex;
    gap: 12px;

    a {
      padding: 8px 16px;
      background-color: $grayscale_40;
      border-radius: 8px;
      color: $grayscale_50;

      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
    }
  }
}

.loading_wrapper {
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
