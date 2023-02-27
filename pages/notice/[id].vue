<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="notice_detail">
    <div class="title_panel">
      <div class="title_panel_left">
        <h1 class="title">{{ notice?.title }}</h1>
        <h2 class="sub_title" @click="router.push('/notice')">
          &lt; 학과소식 페이지로
        </h2>
      </div>
      <div class="info">
        <p><span>작성자</span> {{ notice?.author }}</p>
        <p>
          <span>작성일</span>
          {{
            notice ? new Date(notice.createdAt).toLocaleDateString("ko-kr") : ""
          }}
        </p>
      </div>
    </div>
    <div v-if="!notice" class="loading_wrapper"><Loading /></div>
    <div v-else class="notice_detail_panel">
      <p class="content" v-html="notice.content" />
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
      <div v-if="admin.isAdmin" class="admin">
        <NuxtLink :to="{ query: { id }, path: `/notice/edit` }">
          <button class="btn">수정하기</button>
        </NuxtLink>
        <button class="btn" @click="_delete()">삭제하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { deleteNotice } from "~~/api/notice";
import { NoticeDetail } from "~~/interfaces/notice.interface";
import { useAdminStore } from "~~/store/admin";

const router = useRouter();
const route = useRoute();

const admin = useAdminStore();

const id = computed(() => route.params.id as string);
const prev = computed(() => `/notice/${Math.max(1, Number(id.value) - 1)}`);
const next = computed(() => `/notice/${Number(id.value) + 1}`);

const notice = ref<NoticeDetail>();

watchEffect(async () => {
  notice.value = await getNoticeDetail(id.value);
  if (!notice.value) {
    router.push("/notice");
  }
});

const _delete = async () => {
  const res = await deleteNotice(Number(id.value));
  if (res.status === 200) {
    router.push(`/project`);
  } else {
    alert("삭제에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/detail/styles.scss";

.loading_wrapper {
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
