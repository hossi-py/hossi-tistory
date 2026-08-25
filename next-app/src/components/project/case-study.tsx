import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

/** 케이스 스터디 본문의 번호 매긴 단락. 홈의 섹션 리듬을 그대로 이어간다. */
export function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/8 py-14 md:py-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">{index}</span>
          <span className="h-px w-8 bg-white/15" />
          <h2 className="text-[11px] uppercase tracking-[0.32em] text-white/45">{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </Reveal>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-[1.9] text-white/65 md:text-base">{children}</p>;
}

export function KeywordChips({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
