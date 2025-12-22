import React from 'react';
import styled from '@emotion/styled';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const AchievementsContainer = styled.div`
  margin-top: 2px;
`;

const AchievementsWrapper = styled.div`
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
    margin-bottom: 4px;
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

const Achievements = ({ data }: { data: string }) => {
  if (!data || data.trim() === '' || data === '<p></p>') {
    return null;
  }

  return (
    <AchievementsContainer>
      <AchievementsWrapper>
        <HTMLRenderer htmlString={data} />
      </AchievementsWrapper>
    </AchievementsContainer>
  );
};

export default Achievements;