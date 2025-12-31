import { ISkillItem } from '@/stores/skill.interface';
import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
`;

const Skill = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #374151;
`;

export default function UnratedSkills({ items = [] }: { items: ISkillItem[] }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Wrap>
      {items.map((s, i) => (
        <Skill key={i}>{s.name}</Skill>
      ))}
    </Wrap>
  );
}
