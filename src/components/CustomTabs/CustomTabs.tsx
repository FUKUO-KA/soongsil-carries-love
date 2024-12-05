import { Tab, Tabs, Box } from '@mui/material';
import { getFontStyle } from '@/styles/typo';
import colors from '@/styles/color';

interface CustomTabsProps {
  labels: string[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const CustomTabs = ({ labels, value, onChange }: CustomTabsProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={onChange}
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: '#FCD62C',
            height: 3,
          },
        }}
      >
        {labels.map((label, index) => (
          <Tab
            key={label}
            label={label}
            sx={{
              fontStyle: getFontStyle('Header5'),
              color: value === index ? colors.text : colors.secondary_text,
              '&.Mui-selected': {
                color: colors.text,
              },
              '&:focus': { outline: 'none' },
              paddingX: 4,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
