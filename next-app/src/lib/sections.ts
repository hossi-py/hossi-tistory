import { ACTIVITIES, CERTIFICATIONS, EDUCATION, EXPERIENCES, SKILL_GROUPS } from "@/lib/resume";
import { PROJECTS } from "@/lib/projects";

export type SectionId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "activities"
  | "certifications"
  | "contact";

type SectionMeta = {
  id: SectionId;
  label: string;
  /** 데이터가 없으면 섹션을 통째로 숨긴다. 빈 껍데기보다 없는 편이 낫다. */
  isVisible: boolean;
};

const ALL_SECTIONS: SectionMeta[] = [
  { id: "about", label: "About", isVisible: true },
  { id: "skills", label: "Skills", isVisible: SKILL_GROUPS.length > 0 },
  { id: "experience", label: "Experience", isVisible: EXPERIENCES.length > 0 },
  { id: "projects", label: "Projects", isVisible: PROJECTS.length > 0 },
  { id: "education", label: "Education", isVisible: EDUCATION.length > 0 },
  { id: "activities", label: "Activities", isVisible: ACTIVITIES.length > 0 },
  { id: "certifications", label: "Certifications", isVisible: CERTIFICATIONS.length > 0 },
  { id: "contact", label: "Contact", isVisible: true },
];

export const VISIBLE_SECTIONS = ALL_SECTIONS.filter((section) => section.isVisible);

/** 화면에 실제로 보이는 섹션 기준의 순번. "01", "02" … */
export function getSectionIndex(id: SectionId) {
  const position = VISIBLE_SECTIONS.findIndex((section) => section.id === id);
  return String(position + 1).padStart(2, "0");
}
