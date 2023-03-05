<template>
  <ContainerWrapper>
    <ContainerHeader
      :title="`${club.name} 지원서`"
      sub-title="동아리 지원서 목록"
    />
    <ContainerBody>
      <ContainerTable
        :columns="['이름', '학번']"
        :sizes="[{ flex: 1 }, { width: '52px' }]"
        :data="tableData"
        @click-item="detail"
      ></ContainerTable>
    </ContainerBody>
    <ContainerFooter>
      <ContainerButton title="돌아가기" @click="router.push(`/apply`)" />
    </ContainerFooter>
  </ContainerWrapper>
  <ContainerModal v-if="showModal && apply">
    <ContainerWrapper :style="{ width: '80vw' }">
      <ContainerHeader title="지원서 상세" sub-title="지원서 상세 내용" />
      <ContainerBody :style="{ 'flex-wrap': 'nowrap', 'overflow-y': 'scroll' }">
        <ContainerRow>
          <ContainerInput label="학번" :value="apply.studentId" readonly />
          <ContainerInput label="이름" :value="apply.name" readonly />
        </ContainerRow>
        <ContainerRow>
          <ContainerInput label="전화번호" :value="apply.phone" readonly />
          <ContainerInput label="학교 이메일" :value="apply.email" readonly />
        </ContainerRow>
        <ContainerTextArea
          v-for="(question, n) in questionList"
          :key="n"
          :label="question"
          :value="apply[Answers[n]]"
          readonly
        />
      </ContainerBody>
      <ContainerFooter>
        <ContainerButton :icon="closeImage" @click="showModal = false" />
      </ContainerFooter>
    </ContainerWrapper>
  </ContainerModal>
</template>

<script lang="ts" setup>
import { AxiosError } from "axios";
import { Answers, Questions } from "~~/interfaces/apply.interface";
import { Apply } from "~~/interfaces/apply.interface";
import closeImage from "~/assets/images/close.svg";

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
