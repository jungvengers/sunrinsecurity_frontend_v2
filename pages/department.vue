<template>
  <div class="department">
    <div class="title_panel">
      <div>
        <h1 class="title">학과 소개</h1>
        <h2 class="sub_title">
          정보보호과에 대한 정보를 찾아볼 수 있습니다.
        </h2>
      </div>
    </div>
    <div v-if="!department" class="loading_wrapper"><Loading /></div>
    <div v-else class="department_panel">
      <div class="department_title_wrapper">
        <h1 class="name_mobile">{{ department.name }}</h1>
        <img :src="department.image" class="department_image" />
      </div>
      <div class="department_description">
        <h1 class="name">{{ department.name }}</h1>
        <div class="description">
          <p>소개</p>
          <p>{{ department.description }}</p>
        </div>
        <div class="contact">
          <a
            v-for="(x, i) in department.links"
            :key="i"
            :href="x.link"
            target="_blank"
          >
            <img :src="x.image" />
          </a>
        </div>
      </div>
    </div>
    <div class="department_list">
      <div class="department_list_panel">
        <NuxtLink
          v-for="(i, n) in departmentList"
          :key="n"
          :to="{ query: { name: i.name.toLowerCase() } }"
          class="department_list_item"
          :class="{
            active:
              i.name.toLowerCase() === route.query.name ||
              (!route.query.name && n === 0),
          }"
          >{{ i.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { departmentList } from "~~/interfaces/department.interface";

const route = useRoute();

const departmentList = ref<departmentList>();
const department = computed(() => {
  const name = route.query.name as string;
  return (
    departmentList.value?.find((x) => x.name.toLowerCase() == name) ||
    departmentList.value?.[0]
  );
});

watchEffect(async () => {
  departmentList.value = await getdepartmentList();
});
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/department/styles.scss";

.loading_wrapper {
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
