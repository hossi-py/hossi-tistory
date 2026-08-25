"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/projects";
import { getSectionIndex } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id);

  return (
    <Section id="projects">
      <SectionHeading
        index={getSectionIndex("projects")}
        eyebrow="Projects"
        title="진행한 프로젝트"
        description="R&D 단계의 첫 화면부터 그룹사 공동 플랫폼까지. 각 항목을 열면 무엇을 맡았고 무엇이 남았는지 볼 수 있습니다."
      />

      <div className="relative">
        {/* 타임라인 축 */}
        <div className="absolute bottom-6 left-[5px] top-6 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent" />

        <ul className="flex flex-col gap-3">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const isCurrent = index === 0;
            const panelId = `career-panel-${project.id}`;

            return (
              <li key={project.id} className="relative pl-8 md:pl-12">
                {/* 타임라인 점 — 현재 재직 중인 항목만 히어로의 지도 마커처럼 맥박이 뛴다 */}
                <span
                  className={cn(
                    "absolute left-0 top-[26px] z-10 size-[11px] rounded-full border",
                    isCurrent
                      ? "border-white bg-white"
                      : "border-white/25 bg-black"
                  )}
                >
                  {isCurrent ? (
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                  ) : null}
                </span>

                <Reveal delay={Math.min(index, 4) * 0.05}>
                  <div
                    className={cn(
                      "rounded-2xl border backdrop-blur-xl transition-colors duration-300",
                      isExpanded
                        ? "border-white/16 bg-white/[0.04]"
                        : "border-white/8 bg-white/[0.015] hover:border-white/14 hover:bg-white/[0.03]"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      className="flex w-full items-start gap-4 rounded-2xl px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:px-6"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="text-base font-semibold tracking-[-0.01em] text-white md:text-lg">
                            {project.title}
                          </span>
                          {isCurrent ? (
                            <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/70">
                              Current
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-1.5 block text-sm text-white/45">{project.role}</span>
                        <span className="mt-1 block font-mono text-[11px] tracking-[0.06em] text-white/30">
                          {project.period}
                        </span>
                      </span>

                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "mt-1 size-4 shrink-0 text-white/40 transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {/* grid-rows 0fr→1fr : iOS Safari 에서도 안정적인 아코디언 */}
                    <div
                      id={panelId}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-400 ease-out",
                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/8 px-5 pb-6 pt-5 md:px-6">
                          <p className="text-[15px] leading-[1.8] text-white/60">
                            {project.description}
                          </p>

                          <ul className="mt-5 space-y-2.5">
                            {project.achievements.map((achievement) => (
                              <li key={achievement} className="flex gap-3">
                                <span className="mt-[9px] size-1 shrink-0 rounded-full bg-white/40" />
                                <span className="text-sm leading-[1.75] text-white/70">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={project.href}
                            className="group mt-7 inline-flex items-center gap-1.5 border-b border-white/25 pb-1 text-sm text-white/85 transition-colors hover:border-white hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                          >
                            케이스 스터디 읽기
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
