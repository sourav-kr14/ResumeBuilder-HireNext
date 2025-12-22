import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { useThemes } from '@/stores/themes';

// Mapped directly to your provided folder structure
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import Work from './components/Work';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import UnratedSkills from './components/UnratedSkills';
import Involvement from './components/Involvement';
import Courses from './components/Courses';
import { Objective } from './components/Objective';
import Achievements from './components/Achievements';
import { countReset } from 'console';

const ResumeContainer = styled.div<{ bgColor: string; fontColor: string }>`
  font-family:
    'Inter',
    -apple-system,
    sans-serif;
  width: 210mm;
  height: 297mm;
  padding: 10mm 15mm;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media print {
    margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

const HeaderWrapper = styled.div<{ accentColor: string }>`
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.accentColor};
`;

const MainGrid = styled.div`
  display: grid;
  /* Replicating the exact column ratio from the reference image */
  grid-template-columns: 30% 1px 65%;
  gap: 20px;
  flex: 1;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const VerticalDivider = styled.div<{ accentColor: string }>`
  background-color: ${(props) => props.accentColor};
  opacity: 0.2;
  width: 1px;
  height: 100%;
`;

const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function MinimalTemplate() {
  const resumeData = useContext(StateContext);
  const selectedTheme = useThemes((state) => state.selectedTheme);
  const courseItems =
    resumeData?.certifications || resumeData?.certificates || resumeData?.awards || [];

  if (!resumeData) return null;

  const { basics, work, education, skills, activities } = resumeData;
  const techKeywords = [
    'react',
    'sql',
    'javascript',
    'typescript',
    'python',
    'java',
    'html',
    'css',
    'node',
    'angular',
    'git',
    'docker',
    'aws',
    'php',
    'mongodb',
    'c++',
    'c#',
    'spring',
    'vue',
    'express',
    'postgresql',
    'redis',
    'linux',
  ];

  const programmingSkills = [
    ...(skills.languages || []).filter((s: any) => techKeywords.includes(s.name.toLowerCase())),
  ];

  // const spokenLanguages = (skills.languages || []).filter(
  //   (s: any) => !techKeywords.includes(s.name.toLowerCase())
  // );

  return (
    <ResumeContainer bgColor={selectedTheme.backgroundColor} fontColor={selectedTheme.fontColor}>
      <HeaderWrapper accentColor={selectedTheme.highlighterColor}>
        <BasicIntro basics={basics} />
      </HeaderWrapper>

      <MainGrid>
        <Sidebar>
          <SectionValidator value={basics.objective}>
            <Section title="OBJECTIVE" titleColor={selectedTheme.titleColor}>
              <Objective objective={basics.objective} />
            </Section>
          </SectionValidator>

          <SectionValidator value={programmingSkills}>
            <Section title="LANGUAGES" titleColor={selectedTheme.titleColor}>
              <UnratedSkills items={programmingSkills} />
            </Section>
          </SectionValidator>
          <SectionValidator value={skills.technologies}>
            <Section title="TECHNOLOGIES" titleColor={selectedTheme.titleColor}>
              <UnratedSkills items={skills.technologies} />
            </Section>
          </SectionValidator>
          <SectionValidator value={[...(skills.frameworks || []), ...(skills.libraries || [])]}>
            <Section title="FRAMEWORKS & LIBRARIES" titleColor={selectedTheme.titleColor}>
              <UnratedSkills items={[...(skills.frameworks || []), ...(skills.libraries || [])]} />
            </Section>
          </SectionValidator>
          <SectionValidator value={skills.tools}>
            <Section title="TOOLS" titleColor={selectedTheme.titleColor}>
              <UnratedSkills items={skills.tools} />
            </Section>
          </SectionValidator>

          <SectionValidator value={education}>
            <Section title="EDUCATION" titleColor={selectedTheme.titleColor}>
              <Education education={education} />
            </Section>
          </SectionValidator>

          <SectionValidator value={courseItems}>
            <Section title="VOlunteering" titleColor={selectedTheme.titleColor}>
              <Courses items={courseItems} />
            </Section>
          </SectionValidator>
        </Sidebar>

        <VerticalDivider accentColor={selectedTheme.highlighterColor} />

        <ContentArea>
          <SectionValidator value={basics.summary}>
            <Section title="SUMMARY" titleColor={selectedTheme.titleColor}>
              <AboutMe summary={basics.summary} />
            </Section>
          </SectionValidator>

          <SectionValidator value={work}>
            <Section title="EXPERIENCE" titleColor={selectedTheme.titleColor}>
              <Work work={work} />
            </Section>
          </SectionValidator>

          <SectionValidator value={activities?.achievements}>
            <Section title="ACHIEVEMENTS" titleColor={selectedTheme.titleColor}>
              <Achievements data={activities.achievements} />
            </Section>
          </SectionValidator>
        </ContentArea>
      </MainGrid>
    </ResumeContainer>
  );
}
