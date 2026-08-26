import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { PROJECTS, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const FEATURED = PROJECTS.filter((project) => project.featured && project.detail);

/**
 * 대표 프로젝트 벤토.
 * 타임라인은 "언제 무엇을" 이라는 연대기를 맡고, 여기서는 "무엇부터 보면 되는지" 위계만 만든다.
 * 그래서 카드에는 기간·역할을 반복하지 않고 핵심 한 줄과 대표 성과만 싣는다.
 */
export function FeaturedProjects() {
  if (FEATURED.length === 0) {
    return null;
  }

  const [lead, ...rest] = FEATURED;

  return (
    <div className="mb-16 md:mb-20">
      <Reveal>
        <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-white/35">Selected Work</p>
      </Reveal>

      <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
        <FeaturedCard project={lead} className="md:col-span-2 md:row-span-2" isLead />
        {rest.slice(0, 2).map((project, index) => (
          <FeaturedCard key={project.id} project={project} delay={(index + 1) * 0.08} />
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({
  project,
  className,
  isLead = false,
  delay = 0,
}: {
  project: Project;
  className?: string;
  isLead?: boolean;
  delay?: number;
}) {
  const headline = project.detail?.resultHighlights[0];

  return (
    <Reveal delay={delay} className={cn("min-w-0", className)}>
      <Link
        href={project.href}
        className={cn(
          "group flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-xl transition-colors duration-300",
          "hover:border-white/18 hover:bg-white/[0.045] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
          isLead && "md:p-9"
        )}
      >
        <div className="min-w-0">
          <h3
            className={cn(
              "font-semibold tracking-[-0.025em] text-white",
              isLead ? "text-xl md:text-3xl" : "text-lg"
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "mt-3 text-white/55",
              isLead ? "max-w-xl text-[15px] leading-[1.8] md:text-base" : "text-[14px] leading-[1.7]"
            )}
          >
            {project.detail?.intro ?? project.description}
          </p>
        </div>

        <div className="min-w-0">
          {headline ? (
            <p
              className={cn(
                "border-l border-white/25 pl-4 text-white/85",
                isLead ? "text-[15px] leading-relaxed md:text-base" : "text-[13px] leading-relaxed"
              )}
            >
              {headline}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {project.techStack.slice(0, isLead ? 5 : 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-white/70 transition-colors group-hover:text-white">
            케이스 스터디
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
