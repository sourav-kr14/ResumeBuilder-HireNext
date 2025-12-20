import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Section } from './components/Section';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Work from './components/Work';
import { Education } from './components/Education';
import Languages from './components/Languages';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import AboutMe from './components/AboutMe';
import UnratedSkills from './components/UnratedSkills';
import { useThemes } from '@/stores/themes';

const ResumeContainer = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: white;
  color: #1a1a1a;
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;

  @media print {
    width: 210mm;
    height: 297mm;
    border: none;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

const Header = styled.header<{ themeBg: string }>`
  background-color: ${(props) => props.themeBg || '#27345c'}; 
  color: white;
  padding: 30px 40px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h1 {
    font-size: 32px; 
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .contacts {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 4px;
    font-size: 11px;
    opacity: 0.9;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

const ProfileImage = styled.img`
  width: 100px; 
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 30px; 
  padding: 25px 40px; 
  flex-grow: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
`;

export default function ExecutiveTemplate() {
  const resumeData = useContext(StateContext);
  const activeTheme = useThemes((state) => state.selectedTheme);

  if (!resumeData) return null;

  const { basics, work, education, skills, activities } = resumeData;


  const achievementsHTML = activities?.achievements || '';
  const courseItems = activities?.certifications || resumeData?.certificates || resumeData?.awards || '';
  const involvementsHTML = activities?.involvements || '';
  const spokenLanguages = skills?.languages || resumeData?.languages || [];

  const allTechnicalSkills = [
    ...(skills?.languages_programming || []),
    ...(skills?.technologies || []),
    ...(skills?.frameworks || []),
    ...(skills?.tools || []),
    ...(skills?.databases || []),
  ];

  return (
    <ResumeContainer>
      <Header themeBg={activeTheme.titleColor}>
        <HeaderInfo>
          <h1>{basics.name}</h1>
          <div className="label">{basics.label}</div>
          <div className="contacts">
            {basics.email && <span>@ {basics.email}</span>}
            {basics.phone && <span>📞 {basics.phone}</span>}
            {basics.url && <span>🔗 LinkedIn</span>}
            {basics.location && (
              <span>
                📍 {basics.location.city}, {basics.location.region}
              </span>
            )}
          </div>
        </HeaderInfo>
        {basics.image && <ProfileImage src={basics.image} alt={basics.name} />}
      </Header>

      <Body>
        <Column>
          <SectionValidator value={basics.summary}>
            <Section title="Summary" titleColor={activeTheme.titleColor}>
              <AboutMe summary={basics.summary} />
            </Section>
          </SectionValidator>

          <SectionValidator value={work}>
            <Section title="Experience" titleColor={activeTheme.titleColor}>
              <Work work={work} />
            </Section>
          </SectionValidator>

          <SectionValidator value={education}>
            <Section title="Education" titleColor={activeTheme.titleColor}>
              <Education education={education} />
            </Section>
          </SectionValidator>

          <SectionValidator value={spokenLanguages}>
            <Section title="Languages" titleColor={activeTheme.titleColor}>
              <Languages items={spokenLanguages} />
            </Section>
          </SectionValidator>
        </Column>

        <Column>
          <SectionValidator value={achievementsHTML}>
            <Section title="Key Achievements" isSidebar titleColor={activeTheme.titleColor}>
              <div style={{ fontSize: '11px', color: '#555', lineHeight: '1.4' }}>
                <Achievements data={achievementsHTML} />
              </div>
            </Section>
          </SectionValidator>

          <SectionValidator value={allTechnicalSkills}>
            <Section title="Skills" isSidebar titleColor={activeTheme.titleColor}>
              <UnratedSkills items={allTechnicalSkills} />
            </Section>
          </SectionValidator>

          <SectionValidator value={courseItems}>
            <Section title="Training / Courses" isSidebar titleColor={activeTheme.titleColor}>
              <Courses items={courseItems} />
            </Section>
          </SectionValidator>

          <SectionValidator value={involvementsHTML}>
            <Section title="Interests" isSidebar titleColor={activeTheme.titleColor}>
              <div style={{ fontSize: '11px', color: '#555', lineHeight: '1.4' }}>
                <HTMLRenderer htmlString={involvementsHTML} />
              </div>
            </Section>
          </SectionValidator>
        </Column>
      </Body>
    </ResumeContainer>
  );
}