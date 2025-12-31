import { ISkillItem } from '@/stores/skill.interface';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Skill = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #374151;
`;

export default function RatedSkills({ items = [] }: { items: ISkillItem[] }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Grid>
      {items.map((s, i) => (
        <Skill key={i}>{s.name}</Skill>
      ))}
    </Grid>
  );
}
