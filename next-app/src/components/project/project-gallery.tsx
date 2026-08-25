import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import type { ProjectScreenshot } from "@/lib/projects";

/**
 * 케이스 스터디 화면 이미지.
 * screenshots 가 비어 있으면 아무것도 그리지 않으므로, 이미지가 준비되는 대로 데이터만 채우면 된다.
 */
export function ProjectGallery({ screenshots }: { screenshots?: ProjectScreenshot[] }) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      {screenshots.map((shot, index) => (
        <Reveal key={shot.src} delay={Math.min(index, 3) * 0.06}>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
              />
            </div>
            {shot.caption ? (
              <figcaption className="mt-3 text-[13px] leading-relaxed text-white/45">
                {shot.caption}
              </figcaption>
            ) : null}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
