import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { StyledTabPanelContainer } from './CustomTabPanel.style';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <StyledTabPanelContainer>{children}</StyledTabPanelContainer>
        </Box>
      )}
    </div>
  );
}
