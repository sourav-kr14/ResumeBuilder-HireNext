import { useEffect } from 'react';
import { MenuItem } from '@mui/material';
import { StyledButton } from '../atoms';
import { useResumeStore } from '@/stores/useResumeStore';

export const PrintResume: React.FC<{ isMenuButton?: boolean }> = ({ isMenuButton }) => {
  const resumeData = useResumeStore();

  const handlePrint = () => {
    const name = resumeData?.basics?.name || 'Resume';
    const today = new Date().toISOString().split('T')[0];
    const safeName = name.replace(/\s+/g, '_');

    const fileName = `${safeName}_Resume_${today}`;

    const originalTitle = document.title;
    document.title = fileName;

    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 500);
    }, 100);
  };

  useEffect(() => {
    return () => {};
  }, []);

  if (isMenuButton) {
    return <MenuItem onClick={handlePrint}>Download as PDF</MenuItem>;
  }

  return (
    <StyledButton onClick={handlePrint} variant="outlined">
      Download as PDF
    </StyledButton>
  );
};