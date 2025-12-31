import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useThemes } from '@/stores/themes';

import BasicInfo from './components/BasicInfo';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Work';
import { Section } from './components/Section';
import Achievements from './components/Achievements';
import Education from './components/Education';

const Page = styled.div<{ bg: string; color: string }>`
  width: 210mm;
  min-height: 297mm;
  padding: 32px 36px;
  margin: 0 auto;
  font-family: Inter, sans-serif;
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
`;

export default function NovaTemplate() {
  const resume = useContext(StateContext);
  const theme = useThemes((s) => s.selectedTheme);
  if (!resume) return null;

  const { basics, skills, work, education, activities } = resume;

  const coreSkills = [
    ...(skills.languages || []),
    ...(skills.frameworks || []),
    ...(skills.libraries || []),
    ...(skills.technologies || []),
  ];

  const toolSkills = [
    ...(skills.tools || []),
    ...(skills.practices || []),
    ...(skills.databases || []),
  ];

  return (
    <Page bg={theme.backgroundColor} color={theme.fontColor}>
      <BasicInfo basics={basics} />
      <AboutMe summary={basics.summary} />

      <Section title="Skills" titleColor={theme.titleColor}>
        <Skills core={coreSkills} tools={toolSkills} />
      </Section>

      <Section title="Experience" titleColor={theme.titleColor}>
        <Experience work={work} />
      </Section>

      <Section title="Education" titleColor={theme.titleColor}>
        <Education education={education} />
      </Section>

      {activities?.achievements && (
        <Section title="Achievements" titleColor={theme.titleColor}>
          <Achievements data={activities.achievements} />
        </Section>
      )}
    </Page>
  );
}
