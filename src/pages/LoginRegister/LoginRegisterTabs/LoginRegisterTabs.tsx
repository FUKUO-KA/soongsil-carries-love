import { useState } from 'react';
import { CustomTabs } from '@/components/CustomTabs/CustomTabs';
import { CustomTabPanel } from '@/components/CustomTabs/CustomTabPanel/CustomTabPanel';
import { LoginPanel } from '@/components/Panel/LoginPanel/LoginPanel';
import { RegisterPanel } from '@/components/Panel/RegisterPanel/RegisterPanel';

export const LoginRegisterTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomTabs labels={['로그인', '회원가입']} value={value} onChange={handleChange} />
      <CustomTabPanel value={value} index={0}>
        <LoginPanel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegisterPanel />
      </CustomTabPanel>
    </>
  );
};
