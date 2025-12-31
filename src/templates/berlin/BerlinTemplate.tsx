import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useThemes } from '@/stores/themes';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

/* ===== Components ===== */
import BasicIntro from './components/BasicIntro';
import AboutMe from './components/AboutMe';
import { Objective } from './components/Objective';
import Work from './components/Work';
import { Education } from './components/Education';
import RatedSkills from './components/Skills';
import Languages from './components/Languages';
import UnratedSkills from './components/UnratedSkills';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import Interests from './components/Interests';
import Volunteering from './components/Volunteering';
import Section from './components/Section';

/* ================= PAGE ================= */

const Page = styled.div<{ bg: string; color: string }>`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 36px 32px;
  box-sizing: border-box;
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
  font-family: 'Inter', sans-serif;
`;

/* ================= LAYOUT ================= */

const Layout = styled.div`
  display: grid;
  grid-template-columns: 28% 1px 1fr;
  gap: 28px;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #e5e7eb;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

/* ================= TEMPLATE ================= */

const BerlinTemplate = () => {
  const resume = useContext(StateContext);
  const selectedTheme = useThemes((s) => s.selectedTheme);

  if (!resume) return null;

  const { basics, work, education, skills, activities, certificates, interests, volunteer } =
    resume;

  const summary = basics?.summary;

  /* ===== SKILLS ===== */
  const skillItems = skills?.languages || [];

  const techStack = [
    ...(skills?.technologies || []),
    ...(skills?.frameworks || []),
    ...(skills?.libraries || []),
    ...(skills?.databases || []),
    ...(skills?.tools || []),
  ];

  const spokenLanguages = (skills?.languages || []).filter(
    (l: any) =>
      !['html', 'html5', 'css', 'javascript', 'typescript', 'react'].includes(l.name?.toLowerCase())
  );

  /* ✅ EXPERIENCE (NOW 3 COMPANIES) */
  const limitedWork = work?.slice(0, 3);

  /* ===== COURSES ===== */
  const courseData = activities?.certifications || activities?.courses || certificates || [];

  const bgColor = selectedTheme?.backgroundColor;
  const fontColor = selectedTheme?.fontColor;
  const titleColor = selectedTheme?.titleColor;

  return (
    <Page bg={bgColor} color={fontColor}>
      <Layout>
        {/* ================= LEFT COLUMN ================= */}
        <Sidebar>
          <BasicIntro basics={basics} />

          <Section title="Skills" isSidebar titleColor={titleColor}>
            <RatedSkills items={skillItems} />
            <div style={{ marginTop: '10px' }}>
              <Languages items={spokenLanguages} />
            </div>
          </Section>

          <Section title="Technologies" isSidebar titleColor={titleColor}>
            <UnratedSkills items={techStack} />
          </Section>

          <SectionValidator value={activities?.achievements}>
            <Section title="Achievements" isSidebar titleColor={titleColor}>
              <Achievements data={activities?.achievements} />
            </Section>
          </SectionValidator>

          {interests && interests !== '<p><br></p>' && (
            <Section title="Interests" isSidebar titleColor={titleColor}>
              <Interests data={interests} />
            </Section>
          )}

          <SectionValidator value={volunteer}>
            <Section title="Volunteering" titleColor={titleColor}>
              <Volunteering items={volunteer || []} />
            </Section>
          </SectionValidator>
        </Sidebar>

        <Divider />

        {/* ================= RIGHT COLUMN ================= */}
        <Main>
          <SectionValidator value={summary}>
            <Section title="About Me" titleColor={titleColor}>
              <AboutMe summary={summary} />
            </Section>
          </SectionValidator>

          <SectionValidator value={basics?.objective}>
            <Section title="Objective" titleColor={titleColor}>
              <Objective objective={basics.objective} />
            </Section>
          </SectionValidator>

          <SectionValidator value={limitedWork}>
            <Section title="Employment History" titleColor={titleColor}>
              <Work work={limitedWork || []} />
            </Section>
          </SectionValidator>

          <SectionValidator value={education}>
            <Section title="Education" titleColor={titleColor}>
              <Education education={education || []} />
            </Section>
          </SectionValidator>

          <SectionValidator value={courseData}>
            <Section title="Courses" titleColor={titleColor}>
              <Courses data={courseData} />
            </Section>
          </SectionValidator>
        </Main>
      </Layout>
    </Page>
  );
};

export default BerlinTemplate;
