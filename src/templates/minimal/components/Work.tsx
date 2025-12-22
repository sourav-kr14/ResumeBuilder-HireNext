import React from 'react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { IExperienceItem } from '@/stores/experience.interface';
import styled from '@emotion/styled';

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const WorkEntry = styled.div`
  display: flex;
  flex-direction: column;
`;

const Position = styled.h3`
  font-size: 11.5px;
  font-weight: 700;
  /* Inherits standard font color to stay neutral */
  color: inherit; 
  margin: 0;
  line-height: 1.2;
`;

const CompanyName = styled.div`
  font-size: 10.5px;
  font-weight: 600;
  color: inherit;
  margin-top: 1px;
  opacity: 0.9;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  color: inherit;
  opacity: 0.7;
  margin-top: 2px;
  margin-bottom: 5px;
  font-style: italic;
`;

const SummaryWrapper = styled.div`
  font-size: 10.5px;
  line-height: 1.5;
  color: inherit;

  ul {
    list-style-type: disc !important;
    padding-left: 16px !important;
    margin: 4px 0 0 0 !important;
    color: inherit; 
  }

  li {
    margin-bottom: 3px;
    &::marker {
      color: inherit; 
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  p {
    margin: 0;
  }
`;

export default function Work({ work = [] }: { work: IExperienceItem[] }) {
  if (!Array.isArray(work) || work.length === 0) return null;

  return (
    <WorkContainer>
      {work.map((company, index) => (
        <WorkEntry key={`${company.name}-${index}`}>
          {/* Header Section */}
          <Position>{company.position}</Position>
          <CompanyName>{company.name}</CompanyName>

          <MetaRow>
            <span>
              {dateParser(company.startDate)} —{' '}
              {company.isWorkingHere ? 'Present' : dateParser(company.endDate)}
            </span>
            {company.location && <span>• {company.location}</span>}
          </MetaRow>

          {/* Experience*/}
          <SummaryWrapper>
            <HTMLRenderer htmlString={company.summary} />
          </SummaryWrapper>
        </WorkEntry>
      ))}
    </WorkContainer>
  );
}