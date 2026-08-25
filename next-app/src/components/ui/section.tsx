import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/** 본문 섹션의 공통 리듬. 배경은 항상 검정이며 깊이는 헤어라인과 여백으로만 만든다. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-6 py-24 md:py-36", className)}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  /** 섹션 순번. 편집 디자인처럼 리듬을 만들어 준다. */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">{index}</span>
        <span className="h-px w-8 bg-white/15" />
        <span className="text-[11px] uppercase tracking-[0.32em] text-white/45">{eyebrow}</span>
      </div>

      <h2 className="mt-5 text-[clamp(1.75rem,4.4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-white">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55 md:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** 반투명 유리 패널. 히어로의 드롭다운/팝오버와 같은 표면 언어를 쓴다. */
export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
