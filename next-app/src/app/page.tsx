import { ContactSection } from "@/components/home/contact-section";
import { CredentialSection } from "@/components/home/credential-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { IntroSection } from "@/components/home/intro-section";
import { ProjectsSection } from "@/components/home/projects-section";
import ScrollMorphHero from "@/components/home/scroll-morph-hero";
import { SkillsSection } from "@/components/home/skills-section";
import { ACTIVITIES, CERTIFICATIONS, EDUCATION } from "@/lib/resume";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <ScrollMorphHero />

      {/*
        히어로는 position: fixed 라서, 본문이 그 위로 밀려 올라오며 워드마크를 덮는다.
        불투명한 검정 배경과 z-10 이 그 가림막 역할을 하므로 둘 다 필수다.
      */}
      <div className="relative z-10 bg-black">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* 순서는 lib/sections.ts 의 VISIBLE_SECTIONS 와 반드시 일치해야 번호가 맞는다 */}
        <IntroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredentialSection id="education" eyebrow="Education" title="교육" items={EDUCATION} />
        <CredentialSection
          id="activities"
          eyebrow="Activities"
          title="대외활동"
          items={ACTIVITIES}
        />
        <CredentialSection
          id="certifications"
          eyebrow="Certifications"
          title="자격증"
          items={CERTIFICATIONS}
        />
        <ContactSection />
      </div>
    </main>
  );
}
