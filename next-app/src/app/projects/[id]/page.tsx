import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseSection, KeywordChips, Prose } from "@/components/project/case-study";
import { ProjectGallery } from "@/components/project/project-gallery";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/projects";

type PageParams = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.detail.intro,
    openGraph: {
      title: `${project.title} | yoonho.dev`,
      description: project.detail.intro,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageParams) {
  const { id } = await params;
  const index = PROJECTS.findIndex((item) => item.id === id);

  if (index === -1) {
    notFound();
  }

  const project = PROJECTS[index];
  const { detail } = project;
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  const meta = [
    { label: "Period", value: project.period },
    { label: "Role", value: project.role },
    { label: "Team", value: `${detail.teamSize}명` },
    { label: "Duration", value: detail.duration },
  ];

  return (
    <main className="relative min-h-svh bg-black text-white">
      {/* 히어로의 상단 광원을 옅게 이어받아, 같은 공간에 있다는 느낌을 준다 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60svh] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_60%)]"
      />

      <div className="relative mx-auto w-full max-w-3xl px-6 pb-32 pt-10 md:pt-16">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Projects
        </Link>

        <header className="pb-14 pt-12 md:pb-20 md:pt-16">
          <Reveal>
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-white/70 md:text-lg">
              {detail.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-black px-4 py-5">
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-mono text-[13px] leading-snug text-white/85">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <KeywordChips items={project.techStack} />
            </div>
          </Reveal>
        </header>

        {/* 이미지가 준비되면 projects.ts 의 screenshots 만 채우면 이 자리에 붙는다 */}
        <ProjectGallery screenshots={project.screenshots} />

        <CaseSection index="01" title="Overview">
          <Prose>{detail.overview}</Prose>
        </CaseSection>

        <CaseSection index="02" title="진행한 일">
          <ol className="flex flex-col gap-4">
            {detail.works.map((work, workIndex) => (
              <li
                key={work.problem}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-xl md:p-7"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">
                  {String(workIndex + 1).padStart(2, "0")}
                </span>

                <dl className="mt-5 space-y-5">
                  {[
                    { label: "배경", value: work.background },
                    { label: "문제", value: work.problem },
                    { label: "해결", value: work.solution },
                  ].map((row) => (
                    <div key={row.label} className="md:flex md:gap-6">
                      <dt className="shrink-0 text-[11px] uppercase tracking-[0.24em] text-white/35 md:w-14 md:pt-1">
                        {row.label}
                      </dt>
                      <dd
                        className={
                          row.label === "해결"
                            ? "mt-2 text-[15px] leading-[1.85] text-white/85 md:mt-0"
                            : "mt-2 text-[15px] leading-[1.85] text-white/55 md:mt-0"
                        }
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 border-t border-white/8 pt-5">
                  <KeywordChips items={work.keywords} />
                </div>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection index="03" title="과정">
          <ol className="flex flex-col">
            {detail.process.map((step, stepIndex) => (
              <li key={step} className="flex gap-5 border-b border-white/8 py-4 last:border-b-0">
                <span className="mt-[3px] shrink-0 font-mono text-[11px] tracking-[0.2em] text-white/25">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-[1.8] text-white/65">{step}</span>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection index="04" title="결과">
          <Prose>{detail.result}</Prose>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {detail.resultHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-[14px] leading-[1.7] text-white/80"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection index="05" title="성장한 점">
          <ul className="flex flex-col gap-4">
            {detail.growth.map((item) => (
              <li key={item.content} className="flex gap-4">
                <span
                  className={
                    item.type === "achievement"
                      ? "mt-[7px] size-1.5 shrink-0 rounded-full bg-white"
                      : "mt-[7px] size-1.5 shrink-0 rounded-full border border-white/40"
                  }
                  aria-hidden="true"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                    {item.type === "achievement" ? "Achievement" : "Lesson"}
                  </span>
                  <p className="mt-1.5 text-[15px] leading-[1.85] text-white/70">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection index="06" title="이 경험으로 할 수 있는 것">
          <blockquote className="border-l border-white/25 pl-6 text-[15px] leading-[1.95] text-white/85 md:text-base">
            {detail.competency}
          </blockquote>
        </CaseSection>

        <Reveal>
          <Link
            href={nextProject.href}
            className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/16 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:p-8"
          >
            <span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">Next</span>
              <span className="mt-2 block text-lg font-semibold tracking-[-0.02em] text-white md:text-xl">
                {nextProject.title}
              </span>
            </span>
            <ArrowUpRight className="size-5 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
