<template>
  <div>
    <div class="title">
      <input v-model="title" type="text" placeholder="제목" />
      <input
        v-model="notice.author"
        type="text"
        placeholder="작성자"
        readonly
      />
    </div>
    <editor
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
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { editNotice } from "~~/api/notice";

definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();
const route = useRoute();

const notice = await getNoticeDetail(route.query.id as string);

let title = ref(notice.title);
let content = ref(notice.content);

const sendNotice = async () => {
  const data = {
    title: title.value,
    content: content.value,
  };
  const res = await editNotice(notice.id, data);
  if (res.status === 200) {
    router.push(`/notice/${notice.id}`);
  } else {
    alert("작성에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/write/styles.scss";
</style>
