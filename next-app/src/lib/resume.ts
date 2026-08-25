/**
 * 이력서 섹션 데이터.
 *
 * EDUCATION / ACTIVITIES / CERTIFICATIONS 는 아직 채워지지 않은 틀이다.
 * 배열이 비어 있으면 해당 섹션은 화면에 아예 나타나지 않고,
 * 항목을 채우면 자동으로 섹션과 번호(01, 02 …)가 붙는다.
 */

/** 경력 — 회사 단위. 상세 프로젝트는 PROJECTS 가 담당한다. */
export type Experience = {
  company: string;
  position: string;
  period: string;
  employmentType: string;
  summary: string;
  highlights: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "KB데이타시스템",
    position: "Frontend Developer",
    period: "2022.01 ~ 재직 중",
    employmentType: "정규직",
    summary:
      "SaaS 상품 개발로 시작해 그룹사 공동 플랫폼까지, 프론트엔드 전 영역을 맡아 왔습니다.",
    highlights: [
      "Vue 2 레거시의 Vue 3 + Composition API 전환 주도",
      "18종 규모의 공통 UI 컴포넌트 라이브러리 설계 및 Storybook 문서화",
      "MSW 기반 독립 개발 환경 구축으로 백엔드 일정 의존 해소",
      "한국은행 CBDC 시범사업 기준 소스를 KB 환경에 맞게 이식하고 스타뱅킹 웹뷰에 연동",
      "내부·외주 혼합 팀의 기술 규약 문서화 및 코드 품질 표준화",
    ],
  },
];

/** 기술 스택 — 전부 실제 프로젝트에서 사용한 것만 분류했다. */
export type SkillGroup = {
  label: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Language",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Framework",
    items: ["Vue 3 (Composition API)", "Vue 2", "React 18"],
  },
  {
    label: "Architecture",
    items: ["Feature-Sliced Design (FSD)", "디자인 시스템", "WebView 연동"],
  },
  {
    label: "State & Data",
    items: ["Pinia", "Vuex", "Recoil", "TanStack Query", "TanStack Vue Query", "Alova", "Axios"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "MUI (Material UI v5)"],
  },
  {
    label: "Tooling",
    items: ["Vite", "Storybook", "MSW", "VueUse", "vue/composition-api"],
  },
];

/** 교육 / 대외활동 / 자격증 — 형태가 같아 하나의 타입을 공유한다. */
export type CredentialItem = {
  /** 기관명 · 단체명 · 자격증명 */
  title: string;
  /** 전공/학위 · 활동명 · 발급기관 */
  subtitle?: string;
  /** 재학 기간 · 활동 연도 · 취득일 */
  period: string;
  /** 졸업 · 수료 · 점수 등 */
  status?: string;
  description?: string;
};

/**
 * 교육 (학력)
 * 예: { title: "○○대학교", subtitle: "컴퓨터공학 학사", period: "2016.03 ~ 2022.02", status: "졸업" }
 */
export const EDUCATION: CredentialItem[] = [];

/**
 * 대외활동
 * 예: { title: "○○ 컨퍼런스", subtitle: "발표 · 프론트엔드 트랙", period: "2024", description: "…" }
 */
export const ACTIVITIES: CredentialItem[] = [];

/**
 * 자격증
 * 예: { title: "정보처리기사", subtitle: "한국산업인력공단", period: "2021.11", status: "합격" }
 */
export const CERTIFICATIONS: CredentialItem[] = [];
