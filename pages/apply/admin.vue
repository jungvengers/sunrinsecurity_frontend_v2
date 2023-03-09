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
      <Container.Button title="내보내기(Excel)" @click="exportExcel()" />
      <Container.Button title="내보내기(Word)" @click="exportDocx()" />
    </Container.Footer>
  </Container.Wrapper>
  <Container.Modal v-if="detailModal && apply">
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
      <Container.Footer :style="{ 'justify-content': 'space-between' }">
        <Container.Button :icon="closeImage" @click="detailModal = false" />
        <Container.Button
          title="내보내기(Word)"
          @click="exportDocxSingle(apply!)"
        />
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
import * as xlsx from "xlsx";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  INumberingOptions,
  IParagraphStyleOptions,
  LevelFormat,
  Packer,
  Paragraph,
} from "docx";
import { saveAs } from "file-saver";

const route = useRoute();
const router = useRouter();

const tableData = ref<Array<Array<string>>>([]);
const detailModal = ref<boolean>();

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
  detailModal.value = true;
  // router.push({
  //   query: { club: club.value.name },
  //   path: `/apply/detail/${id}`,
  // });
}

const paragraphStyles: readonly IParagraphStyleOptions[] = [
  {
    id: "Heading1",
    name: "Heading 1",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 28,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
  {
    id: "Heading2",
    name: "Heading 2",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 24,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
  {
    id: "Heading3",
    name: "Heading 3",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 20,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
  {
    id: "Heading4",
    name: "Heading 4",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 16,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
  {
    id: "Heading5",
    name: "Heading 5",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 14,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
  {
    id: "Heading6",
    name: "Heading 6",
    basedOn: "Normal",
    next: "Normal",
    quickFormat: true,
    run: {
      size: 12,
      bold: true,
    },
    paragraph: {
      spacing: {
        after: 120,
      },
    },
  },
];

const numbering: INumberingOptions = {
  config: [
    {
      reference: "numbering",
      levels: [
        {
          level: 0,
          format: LevelFormat.DECIMAL,
          text: "%1.",
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: {
              indent: { left: 720, hanging: 360 },
            },
          },
        },
      ],
    },
  ],
};

function exportExcel() {
  const excel = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet(
    applyList
      .map((x) => ({
        이름: x.name,
        학번: x.studentId,
        전화번호: x.phone,
        이메일: x.email,
        ...Answers.reduce((acc, cur, i) => {
          if (questionList[i]) acc[questionList[i]] = x[cur];
          return acc;
        }, {} as Record<string, string>),
      }))
      .map((x) => (console.log(x), x)),
  );
  xlsx.utils.book_append_sheet(excel, sheet, "지원자 목록");
  xlsx.writeFile(excel, `${club.value.name} 지원자 목록.xlsx`);
}

function exportDocx() {
  const doc = new Document({
    title: `${club.value.name} 지원자 목록`,
    styles: {
      paragraphStyles,
    },
    numbering,
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: `문서 정보`,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: `동아리 명: ${club.value.name}`,
          }),
          new Paragraph({
            text: `지원자 수: ${applyList.length}`,
          }),
          new Paragraph({
            text: `질문`,
            heading: HeadingLevel.HEADING_2,
          }),
          ...questionList.map(
            (x) =>
              new Paragraph({
                text: x,
                numbering: { level: 0, reference: "numbering" },
              }),
          ),
        ],
      },
      ...applyList.map(createSection),
    ],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${club.value.name} 지원자 목록.docx`);
  });
}

function exportDocxSingle(app: Apply) {
  const doc = new Document({
    title: `${app.name}님의 지원서`,
    styles: {
      paragraphStyles,
    },
    numbering,
    sections: [createSection(app)],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${app.name}님의 지원서.docx`);
  });
}

function createSection(app: Apply) {
  return {
    properties: {},
    children: [
      new Paragraph({
        text: `${app.name}`,
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        text: `학번: ${app.studentId}`,
      }),
      new Paragraph({
        text: `전화번호: ${app.phone}`,
      }),
      new Paragraph({
        text: `이메일: ${app.email}`,
      }),
      new Paragraph({
        text: `답변`,
        heading: HeadingLevel.HEADING_2,
      }),
      ...Answers.map((x) => app[x]).reduce((acc, cur, i) => {
        if (questionList[i]) {
          acc.push(
            new Paragraph({
              text: questionList[i],
              heading: HeadingLevel.HEADING_3,
            }),
          );
          acc.push(
            new Paragraph({
              text: cur,
            }),
          );
        }
        return acc;
      }, [] as Paragraph[]),
    ],
  };
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
