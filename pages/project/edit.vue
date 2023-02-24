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
    <Editor
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
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        content_style: 'div {background-color: $grayscale_40;}',
      }"
    />
    <button @click="sendProject()">작성완료</button>
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { editNotice } from "~~/api/notice";
import { editProject } from "~~/api/project";

definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();
const route = useRoute();

const project = await getProjectDetail(route.query.id as string);

let name = ref(project.name);
let club = ref(project.club);
let participants = ref(project.participants);
let type = ref(project.type);
let description = ref(project.description);
let detail = ref(project.detail);

const sendProject = async () => {
  const data = {
    name: name.value,
    club: club.value,
    participants: participants.value,
    type: type.value,
    description: description.value,
    detail: detail.value,
  };
  const res = await editProject(project.id, data);
  if (res.status === 200) {
    router.push(`/project/${project.id}`);
  } else {
    alert("작성에 실패했습니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/project/write/styles.scss";
</style>
