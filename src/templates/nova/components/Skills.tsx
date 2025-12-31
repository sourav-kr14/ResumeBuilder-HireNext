import styled from '@emotion/styled';
import { ISkillItem } from '@/stores/skill.interface';

const Group = styled.div`
  margin-bottom: 6px;
`;

const Label = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px 14px;
  font-size: 11.5px;
  color: #4b5563;
`;

export default function Skills({ core, tools }: { core: ISkillItem[]; tools: ISkillItem[] }) {
  return (
    <>
      <Group>
        <Label>Core Technical Skills</Label>
        <Grid>
          {core.map((s) => (
            <div key={s.name}>{s.name}</div>
          ))}
        </Grid>
      </Group>

      <Group>
        <Label>Tools & Practices</Label>
        <Grid>
          {tools.map((s) => (
            <div key={s.name}>{s.name}</div>
          ))}
        </Grid>
      </Group>
    </>
  );
}
