<template>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, n) in noticeList" :key="n">
        <td>{{ i.id }}</td>
        <td>{{ i.title }}</td>
        <td>{{ i.author }}</td>
        <td>{{ i.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
const noticeList = [
  {
    id: 1,
    title: "notice 1",
    author: "author 1",
    date: "2022-12-11T08:27:09.200Z",
  },
  {
    id: 2,
    title: "notice 2",
    author: "author 2",
    date: "2022-12-11T08:27:09.200Z",
  },
  {
    id: 3,
    title: "notice 3",
    author: "author 3",
    date: "2022-12-11T08:27:09.200Z",
  },
];
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/styles.scss";
</style>
