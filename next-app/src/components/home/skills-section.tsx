import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SKILL_GROUPS } from "@/lib/resume";
import { getSectionIndex } from "@/lib/sections";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        index={getSectionIndex("skills")}
        eyebrow="Skills"
        title="기술 스택"
        description="실제 프로젝트에서 사용한 것만 적었습니다."
      />

      <dl className="border-t border-white/8">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.label} delay={Math.min(index, 4) * 0.06}>
            <div className="grid gap-3 border-b border-white/8 py-6 md:grid-cols-[10rem_1fr] md:gap-8 md:py-7">
              <dt className="text-[11px] uppercase tracking-[0.28em] text-white/40 md:pt-1.5">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[13px] text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
