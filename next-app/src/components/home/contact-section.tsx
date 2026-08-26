import { ArrowUpRight } from "lucide-react";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { CONTACT_LINKS, PROFILE } from "@/lib/profile";
import { getSectionIndex } from "@/lib/sections";

export function ContactSection() {
  return (
    <Section id="contact" className="relative pb-32 md:pb-44">
      {/* 마지막 섹션에만 깔리는 배경 질감. 위아래로 페이드시켜 경계가 드러나지 않게 한다. */}
      {/* 간격을 좁히면 도트 하나당 <circle> 이 하나씩 생겨 DOM 이 급격히 무거워진다 */}
      <DotPattern
        width={34}
        height={34}
        cr={0.9}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full fill-white/25 [mask-image:radial-gradient(60%_60%_at_50%_45%,#000,transparent)]"
      />

      {/* absolute 인 DotPattern 보다 확실히 위에 오도록 본문을 별도 층으로 올린다 */}
      <div className="relative z-10">
        <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">{getSectionIndex("contact")}</span>
          <span className="h-px w-8 bg-white/15" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-white/45">Contact</span>
        </div>

        <h2 className="mt-6 max-w-3xl text-[clamp(1.75rem,4.6vw,3rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
          함께 만들 이야기가 있다면
          <br />
          편하게 연락 주세요.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-14 border-t border-white/8">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 border-b border-white/8 py-5 transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:py-6"
              >
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/40 md:w-32">
                  {link.label}
                </span>
                <span className="flex flex-1 items-center justify-end gap-3 md:justify-between">
                  <span className="truncate text-[15px] text-white/85 transition-colors group-hover:text-white md:text-lg">
                    {link.value}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-20 text-center font-mono text-[11px] tracking-[0.2em] text-white/25">
            © {new Date().getFullYear()} {PROFILE.nameEn.toUpperCase()}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
