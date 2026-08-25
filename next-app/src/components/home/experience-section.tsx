import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { EXPERIENCES } from "@/lib/resume";
import { getSectionIndex } from "@/lib/sections";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading index={getSectionIndex("experience")} eyebrow="Experience" title="경력" />

      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((experience, index) => (
          <Reveal key={experience.company} delay={Math.min(index, 4) * 0.06}>
            <article className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-xl md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                  {experience.company}
                </h3>
                <p className="font-mono text-[12px] tracking-[0.06em] text-white/40">
                  {experience.period}
                </p>
              </div>

              <p className="mt-2 text-sm text-white/55">
                {experience.position}
                <span className="mx-2 text-white/20">·</span>
                {experience.employmentType}
              </p>

              <p className="mt-6 text-[15px] leading-[1.8] text-white/70">{experience.summary}</p>

              <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-6">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-[9px] size-1 shrink-0 rounded-full bg-white/40" />
                    <span className="text-sm leading-[1.75] text-white/65">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
