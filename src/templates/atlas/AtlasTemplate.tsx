import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { useThemes } from '@/stores/themes';

import BasicIntro from './components/BasicIntro';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import { Education } from './components/Education';
import RatedSkills from './components/RatedSkills';
import UnratedSkills from './components/UnratedSkills';
import Achievements from './components/Achievements';
import Involvement from './components/Involvement';
import Courses from './components/Courses';
import { Objective } from './components/Objective';
import { Section } from './components/Section';

/* ================= PAGE ================= */

const Page = styled.div<{ bg: string; color: string }>`
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
  font-family: 'Inter', sans-serif;
  padding: 28px 32px;
  box-sizing: border-box;
  overflow: hidden;

  @media print {
    margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

/* ================= HEADER ================= */

const Header = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 18px;
  align-items: center;
`;

const Photo = styled.div`
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const ContactRow = styled.div<{ accent: string }>`
  font-size: 11.5px;
  color: #4b5563;
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  span {
    color: ${(p) => p.accent};
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: no-underline;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #d1d5db;
  margin: 16px 0 14px;
`;

/* ================= BODY ================= */

const Body = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 26px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* ================= TEMPLATE ================= */

export default function AtlasTemplate() {
  const resume = useContext(StateContext);
  const theme = useThemes((s) => s.selectedTheme);

  if (!resume) return null;

  const { basics, work, education, skills, activities } = resume;

  /* ---------- LINK EXTRACTION ---------- */
  const linkedInProfile = basics.profiles?.find(
    (p: any) => p.network?.toLowerCase() === 'linkedin'
  );

  /* ---------- SKILLS ---------- */
  const techKeywords = [
    'javascript',
    'typescript',
    'react',
    'angular',
    'node',
    'html',
    'css',
    'java',
    'python',
    'sql',
    'mongodb',
    'aws',
    'docker',
    'git',
  ];

  const spokenLanguages = (skills.languages || []).filter(
    (l: any) => !techKeywords.includes(l.name?.toLowerCase())
  );

  const techStack = [
    ...(skills.technologies || []),
    ...(skills.frameworks || []),
    ...(skills.libraries || []),
    ...(skills.databases || []),
    ...(skills.tools || []),
  ];

  const courseData =
    activities?.certifications || activities?.courses || resume?.certificates || [];

  return (
    <Page bg={theme.backgroundColor} color={theme.fontColor}>
      {/* ================= HEADER ================= */}
      <Header>
        {basics.image && (
          <Photo>
            <img src={basics.image} alt={basics.name} />
          </Photo>
        )}

        <div>
          <BasicIntro basics={basics} />

          <ContactRow accent={theme.titleColor}>
            {basics.email && (
              <div>
                <span>Email:</span> <a href={`mailto:${basics.email}`}>{basics.email}</a>
              </div>
            )}

            {basics.phone && (
              <div>
                <span>Phone:</span> <a href={`tel:${basics.phone}`}>{basics.phone}</a>
              </div>
            )}

            {basics.location?.city && (
              <div>
                <span>Location:</span> {basics.location.city}
              </div>
            )}

            {/* ✅ LINKEDIN */}
            {linkedInProfile?.url && (
              <div>
                <span>LinkedIn:</span>{' '}
                <a href={linkedInProfile.url} target="_blank" rel="noopener noreferrer">
                  {linkedInProfile.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}

            {/* ✅ PERSONAL WEBSITE */}
            {basics.url && (
              <div>
                <span>Website:</span>{' '}
                <a
                  href={basics.url.startsWith('http') ? basics.url : `https://${basics.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {basics.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
          </ContactRow>
        </div>
      </Header>

      <Divider />

      {/* ================= BODY ================= */}
      <Body>
        <Left>
          <SectionValidator value={basics.objective}>
            <Section title="OBJECTIVE" titleColor={theme.titleColor}>
              <Objective objective={basics.objective} />
            </Section>
          </SectionValidator>

          <SectionValidator value={spokenLanguages}>
            <Section title="LANGUAGES" titleColor={theme.titleColor}>
              <RatedSkills items={spokenLanguages} />
            </Section>
          </SectionValidator>

          <SectionValidator value={techStack}>
            <Section title="TECHNICAL SKILLS" titleColor={theme.titleColor}>
              <UnratedSkills items={techStack} />
            </Section>
          </SectionValidator>

          <SectionValidator value={education}>
            <Section title="EDUCATION" titleColor={theme.titleColor}>
              <Education education={education} />
            </Section>
          </SectionValidator>

          <SectionValidator value={activities?.involvements}>
            <Section title="VOLUNTEERING" titleColor={theme.titleColor}>
              <Involvement data={activities.involvements} />
            </Section>
          </SectionValidator>
        </Left>

        <Right>
          <SectionValidator value={basics.summary}>
            <Section title="SUMMARY" titleColor={theme.titleColor}>
              <AboutMe summary={basics.summary} />
            </Section>
          </SectionValidator>

          <SectionValidator value={work}>
            <Section title="EXPERIENCE" titleColor={theme.titleColor}>
              <Work work={work} />
            </Section>
          </SectionValidator>

          <SectionValidator value={activities?.achievements}>
            <Section title="ACHIEVEMENTS" titleColor={theme.titleColor}>
              <Achievements data={activities.achievements} />
            </Section>
          </SectionValidator>

          <SectionValidator value={courseData}>
            <Section title="CERTIFICATIONS" titleColor={theme.titleColor}>
              <Courses data={courseData} />
            </Section>
          </SectionValidator>
        </Right>
      </Body>
    </Page>
  );
}
