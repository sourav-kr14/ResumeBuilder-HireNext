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

interface Props {
  items: ISkillItem[];
}

export default function UnratedSkills({ items }: Props) {
  if (!items || items.length === 0) return null;

  /* 🔥 4 columns × 3 rows = 12 skills max */
  const visibleSkills = items.slice(0, 12);

  return (
    <Grid>
      {visibleSkills.map((s) => (
        <div key={s.name}>{s.name}</div>
      ))}
    </Grid>
  );
}
