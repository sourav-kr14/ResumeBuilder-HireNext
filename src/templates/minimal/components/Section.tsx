import React from 'react';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2<{ titleColor?: string }>`
  font-size: 11px;
  font-weight: 700;
  color: ${(props) => props.titleColor || '#333333'}; 
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${(props) => props.titleColor || '#e2e8f0'};
`;

const Content = styled.div`
  width: 100%;
  color: initial; 
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
}

const Section = ({ title, children, titleColor }: SectionProps) => {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;

  return (
    <SectionWrapper>
      {title && <SectionTitle titleColor={titleColor}>{title}</SectionTitle>}
      <Content>{children}</Content>
    </SectionWrapper>
  );
};

export default Section;