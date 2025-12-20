import { IBasics } from '@/stores/index.interface';
import styled from '@emotion/styled';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: white;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Label = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: 0.5px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 4px;
  align-items: center;
  margin-top: 6px;
  font-size: 11.5px;
  font-weight: 500;

  span,
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
    text-decoration: none;
    opacity: 0.9;
  }

  /* Icons styling */
  .icon {
    font-size: 13px;
    opacity: 0.8;
  }
`;

export default function BasicIntro({ basics }: { basics: IBasics }) {
  return (
    <IntroWrapper>
      <Name>{basics.name}</Name>

      <Label>{basics.label}</Label>

      <ContactWrapper>
        {basics.email && (
          <a href={`mailto:${basics.email}`}>
            <span className="icon">@</span> {basics.email}
          </a>
        )}

        {basics.url && (
          <a href={basics.url} target="_blank" rel="noreferrer">
            <span className="icon">🔗</span> LinkedIn
          </a>
        )}

        {basics.location?.city && (
          <span>
            <span className="icon">📍</span> {basics.location.city}, {basics.location.region}
          </span>
        )}

        {basics.phone && (
          <a href={`tel:${basics.phone}`}>
            <span className="icon">📞</span> {basics.phone}
          </a>
        )}
      </ContactWrapper>
    </IntroWrapper>
  );
}
