<template>
  <div>
    <div class="title">
      <input v-model="title" type="text" placeholder="제목" />
      <input v-model="author" type="text" placeholder="작성자" />
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
           bullist numlist outdent indent | removeformat | image | help',
        content_style: 'div {background-color: #000000;}',
        automatic_uploads: true,
        images_upload_url: `${config.public.CDNUrl}/upload`,
        file_picker_types: 'image',
      }"
    />
    <button @click="sendNotice()">작성완료</button>
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { createNotice } from "~~/api/notice";

let title = ref("");
let author = ref("");
let content = ref("");

const config = useRuntimeConfig();
const router = useRouter();

const sendNotice = async () => {
  const data = {
    title: title.value,
    author: author.value,
    content: content.value,
  };
  const res = await createNotice(data);
  if (res.status === 201) {
    router.push("/notice");
  } else {
    alert("작성에 실패했습니다.");
  }
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/write/styles.scss";
</style>
