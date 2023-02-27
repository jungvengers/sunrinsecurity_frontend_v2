<template>
  <Loading v-if="!notice" />
  <div v-else>
    <div class="title">
      <input v-model="title" type="text" placeholder="제목" />
      <input
        v-model="notice.author"
        type="text"
        placeholder="작성자"
        readonly
      />
    </div>
    <Editor
      v-model="content"
      api-key="2jcbz2joi9s0xve80mqmeilcqhjfyn3204335n94uxrftan1"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        content_style: 'div {background-color: $grayscale_40;}',
      }"
    />
    <button @click="sendNotice()">작성완료</button>
    <button @click="_delete()">삭제</button>
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { editNotice, deleteNotice } from "~~/api/notice";
import { NoticeDetail } from "~~/interfaces/notice.interface";

definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();
const route = useRoute();

const notice = ref<NoticeDetail>();

const title = ref<string>();
const content = ref<string>();

watchEffect(async () => {
  notice.value = await getNoticeDetail(route.query.id as string);
  title.value = notice.value.title;
  content.value = notice.value.content;
});

const sendNotice = async () => {
  if (!notice.value) {
    alert("공지사항이 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
    return;
  }
  if (!title.value || !content.value) {
    alert("제목과 내용을 모두 입력해주세요.");
    return;
  }
  const data = {
    title: title.value,
    content: content.value,
  };
  const res = await editNotice(notice.value.id, data);
  if (res.status === 200) {
    router.push(`/notice/${notice.value.id}`);
  } else {
    alert("작성에 실패했습니다.");
  }
};

const _delete = async () => {
  if (!notice.value) {
    alert("공지사항이 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
    return;
  }
  const res = await deleteNotice(notice.value.id);
  if (res.status === 200) {
    router.push(`/notice`);
  } else {
    alert("삭제에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/write/styles.scss";
</style>
