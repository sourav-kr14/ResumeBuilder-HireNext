import { IBasics } from '@/stores/index.interface';
import styled from '@emotion/styled';
import { useThemes } from '@/stores/themes';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.h1<{ nameColor: string }>`
  font-size: 28px;
  font-weight: 800;
  color: ${(props) => props.nameColor};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.85;
  letter-spacing: 1px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 6px;
  align-items: center;
  margin-top: 8px;
  font-size: 10.5px;
  font-weight: 500;

  span,
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: inherit; 
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  .icon {
    font-size: 12px;
    opacity: 0.7;
  }
`;

export default function BasicIntro({ basics }: { basics: IBasics }) {
  const activeTheme = useThemes((state) => state.selectedTheme);
  
  const linkedinProfile = basics.profiles?.find((p) => p.network.toLowerCase() === 'linkedin');
  const linkedinUrl = linkedinProfile?.url || '';
  
  const getCorrectUrl = (url: string) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <IntroWrapper>
      <Name nameColor={activeTheme.titleColor}>{basics.name}</Name>
      <Label>{basics.label}</Label>

      <ContactWrapper>
        {basics.email && (
          <a href={`mailto:${basics.email.trim()}`}>
            <span className="icon">✉️</span> {basics.email}
          </a>
        )}

        {basics.phone && (
          <a href={`tel:${basics.phone.replace(/\s/g, '')}`}>
            <span className="icon">📞</span> {basics.phone}
          </a>
        )}

        {basics.location?.city && (
          <span>
            <span className="icon">📍</span> {basics.location.city}
            {basics.location.region ? `, ${basics.location.region}` : ''}
          </span>
        )}

        {linkedinUrl && (
          <a href={getCorrectUrl(linkedinUrl)} target="_blank" rel="noopener noreferrer">
            <span className="icon">🔗</span> LinkedIn
          </a>
        )}
      </ContactWrapper>
    </IntroWrapper>
  );
}