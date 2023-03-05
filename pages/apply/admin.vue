<template>
  <Container.Wrapper>
    <Container.Header
      :title="`${club.name} 지원서`"
      sub-title="동아리 지원서 목록"
    />
    <Container.Body>
      <Container.Table
        :columns="['이름', '학번']"
        :sizes="[{ flex: 1 }, { width: '52px' }]"
        :data="tableData"
        @click-item="detail"
      ></Container.Table>
    </Container.Body>
    <Container.Footer>
      <Container.Button title="돌아가기" @click="router.push(`/apply`)" />
    </Container.Footer>
  </Container.Wrapper>
  <Container.Modal v-if="showModal && apply">
    <Container.Wrapper :style="{ width: '80vw' }">
      <Container.Header title="지원서 상세" sub-title="지원서 상세 내용" />
      <Container.Body
        :style="{ 'flex-wrap': 'nowrap', 'overflow-y': 'scroll' }"
      >
        <Container.Row>
          <Container.Input label="학번" :value="apply.studentId" readonly />
          <Container.Input label="이름" :value="apply.name" readonly />
        </Container.Row>
        <Container.Row>
          <Container.Input label="전화번호" :value="apply.phone" readonly />
          <Container.Input label="학교 이메일" :value="apply.email" readonly />
        </Container.Row>
        <Container.TextArea
          v-for="(question, n) in questionList"
          :key="n"
          :label="question"
          :value="apply[Answers[n]]"
          readonly
        />
      </Container.Body>
      <Container.Footer>
        <Container.Button :icon="closeImage" @click="showModal = false" />
      </Container.Footer>
    </Container.Wrapper>
  </Container.Modal>
</template>

<script lang="ts" setup>
import { AxiosError } from "axios";
import { Answers, Questions } from "~~/interfaces/apply.interface";
import { Apply } from "~~/interfaces/apply.interface";
import closeImage from "~/assets/images/close.svg";
import Container from "~~/components/Container";

const route = useRoute();
const router = useRouter();

const tableData = ref<Array<Array<string>>>([]);
const showModal = ref<boolean>();

const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.club as string;
  return (
    clubList.find((x) => x.name.toLowerCase() == name.toLowerCase()) ||
    clubList[0]
  );
});
const clubId = club.value.id ?? 1;

const questionList = await getQuestions(clubId);
const applyList = await getApplyOfClubList(clubId);
tableData.value = applyList.map((x) => [x.name, x.studentId] as string[]);

const apply = ref<Apply>();

function detail(id: number) {
  apply.value = applyList[id];
  console.log(apply.value);
  showModal.value = true;
  // router.push({
  //   query: { club: club.value.name },
  //   path: `/apply/detail/${id}`,
  // });
}

async function getQuestions(id: number) {
  const questions = await getQuestionList(id);
  if (!(questions instanceof AxiosError)) {
    return Questions.map((x) => questions[x]).filter((x) => x);
  }
  return [];
}

definePageMeta({
  middleware: ["auth", "admin"],
});
</script>

<style scoped></style>
