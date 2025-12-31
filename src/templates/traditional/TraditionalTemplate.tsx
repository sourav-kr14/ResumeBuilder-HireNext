import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { useThemes } from '@/stores/themes';

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

/* ================= HEADER ================= */

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 20px;
  align-items: center;
  padding-bottom: 6px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.h1<{ color: string }>`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  color: ${(p) => p.color};
`;

const Role = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #4b5563;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11.5px;
  color: #4b5563;
`;

/* ===== Image ===== */

const PhotoWrapper = styled.div<{ border: string }>`
  width: 100px;
  height: 100px;
  border: 1px solid ${(p) => p.border};
  overflow: hidden;
`;

/* ================= CONTENT ================= */

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ================= TEMPLATE ================= */

export default function TraditionalTemplate() {
  const resume = useContext(StateContext);
  const theme = useThemes((s) => s.selectedTheme);

  if (!resume) return null;

  const { basics, work, education, skills, activities } = resume;

  const trimmedWork = Array.isArray(work) ? work.slice(0, 2) : [];

  const techStack = [
    ...(skills.technologies || []),
    ...(skills.frameworks || []),
    ...(skills.libraries || []),
    ...(skills.tools || []),
  ];

  return (
    <Page bg={theme.backgroundColor} color={theme.fontColor}>
      {/* ================= HEADER ================= */}
      <Header>
        <HeaderLeft>
          <Name color={theme.titleColor}>{basics.name}</Name>
          {basics.label && <Role>{basics.label}</Role>}

          <ContactRow>
            {basics.email && <span>{basics.email}</span>}
            {basics.phone && <span>{basics.phone}</span>}
            {basics.url && <span>{basics.url}</span>}
          </ContactRow>
        </HeaderLeft>

        {basics.image && (
          <PhotoWrapper border={theme.titleColor}>
            <img
              src={basics.image}
              alt="profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '0',
                display: 'block',
              }}
            />
          </PhotoWrapper>
        )}
      </Header>

      {/* ================= CONTENT ================= */}
      <Content>
        <SectionValidator value={basics.summary}>
          <Section title="Profile" titleColor={theme.titleColor}>
            <AboutMe summary={basics.summary} />
          </Section>
        </SectionValidator>

        <SectionValidator value={trimmedWork}>
          <Section title="Experience" titleColor={theme.titleColor}>
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
