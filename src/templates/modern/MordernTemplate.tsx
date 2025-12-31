import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { useThemes } from '@/stores/themes';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);
  const activeTheme = useThemes((state) => state.selectedTheme);

  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

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
    ...(skills.frameworks || []),
    ...(skills.technologies || []),
    ...(skills.libraries || []),
    ...(skills.databases || []),
    ...(skills.tools || []),
  ];

  const spokenLanguages = (skills.languages || []).filter(
    (s: any) => !techKeywords.includes(s.name.toLowerCase())
  );

  return (
    <div className="p-2 bg-white min-h-full">
      <BasicIntro
        name={basics.name}
        label={basics.label}
        url={basics.url}
        email={basics.email}
        city={basics.location.city}
        phone={basics.phone}
        image={basics.image}
        profiles={basics.profiles}
        themeColor={activeTheme.titleColor}
      />

      <div className="flex">
        {/* Main Column */}
        <div className="basis-[60%] p-3 border-r border-gray-100">
          <SectionValidator value={basics.summary}>
            <SummarySection summary={basics.summary} titleColor={activeTheme.titleColor} />
          </SectionValidator>

          <SectionValidator value={work}>
            <WorkSection experience={work} titleColor={activeTheme.titleColor} />
          </SectionValidator>

          <SectionValidator value={awards}>
            <AwardSection awardsReceived={awards} titleColor={activeTheme.titleColor} />
          </SectionValidator>

          <SectionValidator value={spokenLanguages}>
            <SkillsSection
              title="Languages"
              list={spokenLanguages}
              titleColor={activeTheme.titleColor}
            />
          </SectionValidator>
        </div>

        {/* Sidebar Column */}
        <div className="basis-[40%] p-3">
          <SectionValidator value={basics.objective}>
            <Objective objective={basics.objective} titleColor={activeTheme.titleColor} />
          </SectionValidator>

          {/* Render grouped Programming/Tech skills in Sidebar */}
          <SectionValidator value={programmingSkills}>
            <SkillsSection
              title="Skills & Expertise"
              list={programmingSkills}
              titleColor={activeTheme.titleColor}
            />
          </SectionValidator>

          <SectionValidator value={education}>
            <EducationSection education={education} titleColor={activeTheme.titleColor} />
          </SectionValidator>

          <SectionValidator value={volunteer}>
            <VolunteerSection volunteer={volunteer} titleColor={activeTheme.titleColor} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
