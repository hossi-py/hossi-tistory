import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { CredentialItem } from "@/lib/resume";
import { getSectionIndex, type SectionId } from "@/lib/sections";

type CredentialSectionProps = {
  id: Extract<SectionId, "education" | "activities" | "certifications">;
  eyebrow: string;
  title: string;
  items: CredentialItem[];
};

/**
 * 교육 · 대외활동 · 자격증처럼 "기관 / 내용 / 기간" 세 축이 같은 목록을 렌더한다.
 * 항목이 없으면 아무것도 그리지 않는다 — 빈 섹션은 없는 것만 못하다.
 */
export function CredentialSection({ id, eyebrow, title, items }: CredentialSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section id={id}>
      <SectionHeading index={getSectionIndex(id)} eyebrow={eyebrow} title={title} />

      <ul className="border-t border-white/8">
        {items.map((item, index) => (
          <Reveal key={`${item.title}-${item.period}`} delay={Math.min(index, 4) * 0.06}>
            <li className="grid gap-2 border-b border-white/8 py-6 md:grid-cols-[10rem_1fr] md:gap-8 md:py-7">
              <span className="font-mono text-[12px] tracking-[0.06em] text-white/40 md:pt-1">
                {item.period}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-white md:text-lg">
                    {item.title}
                  </h3>
                  {item.status ? (
                    <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-white/55">
                      {item.status}
                    </span>
                  ) : null}
                </div>

                {item.subtitle ? (
                  <p className="mt-1.5 text-sm text-white/50">{item.subtitle}</p>
                ) : null}

                {item.description ? (
                  <p className="mt-3 text-[15px] leading-[1.8] text-white/65">{item.description}</p>
                ) : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
