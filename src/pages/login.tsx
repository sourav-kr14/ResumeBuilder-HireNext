import styled from 'styled-components';

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 48px 40px;
  border-radius: 18px;
  width: 420px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
`;

const Badge = styled.div`
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;

  span {
    color: #6366f1;
  }
`;

const Subtitle = styled.p`
  margin-top: 14px;
  font-size: 15px;
  color: #475569;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 25px rgba(99, 102, 241, 0.35);
  }
`;

const FooterText = styled.p`
  margin-top: 18px;
  font-size: 12px;
  color: #94a3b8;
`;

export default function Login() {
  const loginWithLinkedIn = () => {
    window.location.href = 'http://localhost:5000/api/auth/linkedin';
  };

  return (
    <Page>
      <Card>
        <Badge>🚀 Trusted by 5M+ users</Badge>

        <Title>
          Build a <span>Job-Winning Resume</span>
        </Title>

        <Subtitle>Create ATS-friendly resumes in minutes using LinkedIn.</Subtitle>

        <Button onClick={loginWithLinkedIn}>Continue with LinkedIn</Button>

        <FooterText>Secure login • No password required</FooterText>
      </Card>
    </Page>
  );
}
