import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { useThemes } from '@/stores/themes';

import BasicInfo from './components/BasicInfo';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import { Education } from './components/Education';
import UnratedSkills from './components/UnratedSkills';
import RatedSkills from './components/Skills';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import { Section } from './components/Section';

/* ================= PAGE ================= */

const Page = styled.div<{ bg: string; color: string }>`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 26px 32px;
  font-family: 'Inter', sans-serif;
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
  box-sizing: border-box;
`;

/* ================= CONTENT ================= */

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ================= SKILLS BULLET WRAPPER ================= */

const SkillBullets = styled.ul`
  margin: 0;
  padding-left: 16px;

  li {
    list-style-type: disc;
    margin-bottom: 4px;
  }

  /* grid ke bullets ko nicely align kare */
  > div {
    display: contents;
  }
`;

/* ================= TEMPLATE ================= */

export default function AthenaTemplate() {
  const resume = useContext(StateContext);
  const theme = useThemes((s) => s.selectedTheme);

  if (!resume) return null;

  const { basics, work, education, skills, activities } = resume;

  /* 🔥 3 companies now */
  const trimmedWork = Array.isArray(work) ? work.slice(0, 3) : [];

  const techStack = [
    ...(skills.technologies || []),
    ...(skills.frameworks || []),
    ...(skills.libraries || []),
    ...(skills.tools || []),
  ];

  return (
    <Page bg={theme.backgroundColor} color={theme.fontColor}>
      {/* ================= BASIC INFO ================= */}
      <BasicInfo basics={basics} />

      {/* ================= CONTENT ================= */}
      <Content>
        <SectionValidator value={basics.summary}>
          <AboutMe summary={basics.summary} />
        </SectionValidator>

        <SectionValidator value={trimmedWork}>
          <Section title=" Professional Experience" titleColor={theme.titleColor}>
            <Work work={trimmedWork} />
          </Section>
        </SectionValidator>

        <SectionValidator value={techStack}>
          <Section title="Skills" titleColor={theme.titleColor}>
            <UnratedSkills items={techStack} />
          </Section>
        </SectionValidator>

        <SectionValidator value={education}>
          <Section title="Education" titleColor={theme.titleColor}>
            <Education education={education} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.languages}>
          <Section title="Languages" titleColor={theme.titleColor}>
            <RatedSkills items={skills.languages} />
          </Section>
        </SectionValidator>

        <SectionValidator value={activities?.achievements}>
          <Section title="Achievements" titleColor={theme.titleColor}>
            <Achievements data={activities.achievements} />
          </Section>
        </SectionValidator>

        <SectionValidator value={activities?.certifications}>
          <Section title="Certifications" titleColor={theme.titleColor}>
            <Courses data={activities.certifications} />
          </Section>
        </SectionValidator>
      </Content>
    </Page>
  );
}
