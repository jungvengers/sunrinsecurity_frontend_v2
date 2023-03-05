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
</template>

<script lang="ts" setup>
import { AxiosError } from "axios";

const route = useRoute();
const router = useRouter();

const tableData = ref<Array<Array<string>>>([]);

const clubList = await getClubList();
const club = computed(() => {
  const name = route.query.club as string;
  return (
    clubList.find((x) => x.name.toLowerCase() == name.toLowerCase()) ||
    clubList[0]
  );
});
const clubId = club.value.id ?? 1;

const applyList = await getApplyOfClubList(clubId);
if (applyList instanceof AxiosError) {
  // ToDo
} else {
  tableData.value = applyList.map((x) => [x.name, x.studentId] as string[]);
}

function detail(id: number) {
  router.push({
    query: { club: club.value.name },
    path: `/apply/detail/${id}`,
  });
}
</script>

<style scoped></style>
