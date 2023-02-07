<template>
  <div class="admin">
    <button @click="changeMenu('notice')">notice</button>
    <button @click="changeMenu('project')">project</button>
    <div id="notice" :class="{ active: currentMenu === 'notice' }">
      <template v-for="(i, n) in noticeList" :key="n">
        <p>{{ i.id }} {{ i.title }}</p>
      </template>
      <button class="add" @click="add = !add">add</button>
      <div :class="{ active: add || edit }">
        <input v-model="noticeParam.title" type="text" placeholder="title" />
        <input v-model="noticeParam.author" type="text" placeholder="author" />
        <textarea
          v-model="noticeParam.content"
          type="text"
          placeholder="content"
        ></textarea>
      </div>
    </div>
    <div id="project" :class="{ active: currentMenu === 'project' }">
      <template v-for="(i, n) in noticeList" :key="n">
        <p>{{ i.id }} {{ i.title }}</p>
      </template>
      <button class="add" @click="add = !add">add</button>
      <div :class="{ active: add || edit }">
        <input v-model="projectParam.name" type="text" placeholder="name" />
        <input v-model="projectParam.club" type="text" placeholder="club" />
        <input
          v-model="projectParam.participant"
          type="text"
          placeholder="participant"
        />
        <input v-model="projectParam.type" type="text" placeholder="type" />
        <input id="file" type="file" placeholder="image" />
        <input
          v-model="projectParam.description"
          type="text"
          placeholder="description"
        />
      </div>
    </div>
    <span :class="{ active: add }">
      <button @click="submit()">submit</button>
      <button :class="{ active: edit }">delete</button>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { getNoticeListAll, getNoticeDetail } from "~~/composables/notice";
import { getProjectListAll } from "~~/composables/project";
import { createNotice } from "~~/api/notice";
import { CreateNotice } from "~~/interfaces/notice.interface";
import { createProject } from "~~/api/project";
import { CreateProject } from "~~/interfaces/project.interface";

const noticeList = await getNoticeListAll();
const projectList = await getProjectListAll();

let currentMenu = ref("");
let add = ref(false);
let edit = ref(false);

const changeMenu = (menu: string) => {
  currentMenu.value = menu;
};

const noticeParam = ref({}) as Ref<CreateNotice>;
const projectParam = ref({}) as Ref<CreateProject>;

const submit = async () => {
  if (currentMenu.value === "notice") {
    if (!edit.value) {
      await createNotice(noticeParam.value);
      add.value = false;
    }
  } else if (currentMenu.value === "project") {
    if (!edit.value) {
      const file = document.getElementById("file") as HTMLInputElement;
      if (file.files === null) return;
      projectParam.value.image = file.files[0];
      await createProject(projectParam.value);
      add.value = false;
    }
  }
};

definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/admin/index/styles.scss";
</style>
