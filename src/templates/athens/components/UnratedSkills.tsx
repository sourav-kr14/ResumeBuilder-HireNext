import { ISkillItem } from '@/stores/skill.interface';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px 18px;
  font-size: 11.5px;
  color: #4b5563;
  line-height: 1.35;
`;

const SkillItem = styled.div`
  position: relative;
  padding-left: 10px;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0.2em;
    font-size: 14px;
    line-height: 1;
    color: #1a1a1a;
  }
`;

export default function UnratedSkills({ items }: { items: ISkillItem[] }) {
  if (!items || items.length === 0) return null;

  /* 🔥 strictly 4 columns × 3 rows */
  const visibleSkills = items.slice(0, 12);

  return (
    <Grid>
      {visibleSkills.map((s) => (
        <SkillItem key={s.name}>{s.name}</SkillItem>
      ))}
    </Grid>
  );
}
