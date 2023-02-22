<template>
  <div>
    <div class="title">
      <div class="first">
        <input v-model="name" type="text" placeholder="프로젝트명" />
        <input v-model="club" type="text" placeholder="참여동아리" />
        <input v-model="participants" type="text" placeholder="참가자" />
      </div>
      <div class="second">
        <input v-model="type" type="text" placeholder="분야" />
        <input v-model="description" type="text" placeholder="한 줄 소개" />
      </div>
    </div>
    <editor
      v-model="detail"
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
          'undo redo | formatselect | bold italic | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | image | help',
        automatic_uploads: true,
        images_upload_url: 'http://localhost:3000/upload/',
        file_picker_types: 'image',
      }"
    />
    <div class="filebox">
      <input
        ref="fileName"
        class="upload_name"
        value="파일선택"
        disabled="true"
      />

      <label for="ex_filename">업로드</label>
      <input
        id="ex_filename"
        type="file"
        class="upload_hidden"
        @change="fileUpload"
      />
    </div>
    <button @click="sendProject()">작성완료</button>
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { createProject } from "~~/api/project";

const router = useRouter();

let name = ref("");
let club = ref("");
let participants = ref("");
let type = ref("");
let description = ref("");
let detail = ref("");
let fileName = ref<HTMLInputElement>();

const sendProject = async () => {
  const data = {
    name: name.value,
    club: club.value,
    participants: participants.value,
    type: type.value,
    description: description.value,
    detail: detail.value,
  };
  const res = await createProject(data);
  if (res.status === 201) {
    router.push("/project");
  } else {
    alert("작성에 실패했습니다.");
  }
};

const fileUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
    (fileName.value as HTMLInputElement).value = file.name;
  }
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/project/write/styles.scss";
</style>
