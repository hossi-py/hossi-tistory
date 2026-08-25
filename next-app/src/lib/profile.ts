import { PROJECTS } from "@/lib/projects";

/** 첫 프로젝트 시작일 = 커리어 시작일. 여기서 연차를 파생시켜 매년 손보지 않아도 되게 한다. */
const CAREER_START = new Date("2022-01-17");

export function getCareerYears(now: Date = new Date()) {
  return now.getFullYear() - CAREER_START.getFullYear() + 1;
}

export const PROFILE = {
  name: "황윤호",
  nameEn: "Yoonho Hwang",
  role: "Frontend Developer",
  company: "KB데이타시스템",
  tagline:
    "초기 R&D 프로젝트부터 대규모 엔터프라이즈 시스템까지, 다양한 규모의 프론트엔드를 만들어 왔습니다.",
  bio: [
    "단순히 기능을 구현하는 데서 멈추지 않고, 사용자에게 가장 직관적인 경험이 무엇인지 고민합니다.",
    "레거시를 현대적인 아키텍처로 옮기고, 디자인 시스템과 기술 규약으로 팀 전체의 속도를 끌어올리는 일을 좋아합니다.",
  ],
} as const;

/**
 * 연락처 링크.
 * TODO: email 은 공개 사이트에 노출되므로 원하는 주소로 바꾸거나 항목을 지워도 된다.
 */
export const CONTACT_LINKS = [
  { label: "Email", value: "hyh.kbds@gmail.com", href: "mailto:hyh.kbds@gmail.com" },
  { label: "GitHub", value: "github.com/hossi-py", href: "https://github.com/hossi-py" },
] as const;

/** 소개 섹션 상단 지표. 값은 전부 실제 데이터에서 파생시킨다. */
export function getProfileStats() {
  const techStacks = new Set(PROJECTS.flatMap((project) => project.techStack));

  return [
    { value: `${getCareerYears()}년차`, label: "Frontend" },
    { value: `${PROJECTS.length}`, label: "Projects" },
    { value: `${techStacks.size}`, label: "Tech Stack" },
  ];
}
