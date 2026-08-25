import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { PROFILE, getProfileStats } from "@/lib/profile";
import { getSectionIndex } from "@/lib/sections";

export function IntroSection() {
  const stats = getProfileStats();

  return (
    <Section id="about">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">{getSectionIndex("about")}</span>
          <span className="h-px w-8 bg-white/15" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-white/45">About</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
          {PROFILE.name}
          <span className="ml-3 align-middle text-[0.4em] font-normal tracking-[0.28em] text-white/35">
            {PROFILE.nameEn.toUpperCase()}
          </span>
        </h2>
        <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/45">{PROFILE.role}</p>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-10 max-w-2xl text-[17px] leading-[1.75] text-white/80 md:text-xl">
          {PROFILE.tagline}
        </p>

        <div className="mt-6 max-w-2xl space-y-4">
          {PROFILE.bio.map((line) => (
            <p key={line} className="text-[15px] leading-[1.85] text-white/55 md:text-base">
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center gap-2 bg-black px-3 py-7 md:py-9"
            >
              {/* flex-col-reverse: 마크업은 dt→dd 순서를 지키고, 화면에서는 값이 위에 온다 */}
              <dt className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
