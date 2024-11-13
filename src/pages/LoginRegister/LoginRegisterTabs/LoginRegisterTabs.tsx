import { useState } from 'react';
import { CustomTabs } from '@/components/CustomTabs/CustomTabs';
import { CustomTabPanel } from '@/components/CustomTabs/CustomTabPanel/CustomTabPanel';
import { TextField } from '@/components/TextField/TextField';
import { Button } from '@/components/Button/Button';
import { Spacing } from '@/components/Spacing/Spacing';
import { StyledCertificateBtnContainer, StyledInfoText } from './LoginRegisterTabs.style';

export const LoginRegisterTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomTabs labels={['로그인', '회원가입']} value={value} onChange={handleChange} />
      <CustomTabPanel value={value} index={0}>
        <TextField title="이메일" description="이메일을 입력하세요..." />
        <TextField type="password" title="비밀번호" description="비밀번호를 입력하세요..." />
        <Spacing direction="vertical" size={10} />
        <Button size="BIG" text="로그인" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TextField
          title="이메일"
          description="@soongsil.ac.kr 또는 @ssu.ac.kr"
          isCertificate={true}
        />
        <StyledCertificateBtnContainer>
          <Button size="SMALL" text="인증번호" />
        </StyledCertificateBtnContainer>
        <TextField type="password" title="인증번호" description="인증번호를 입력하세요..." />
        <Spacing direction="vertical" size={10} />
        <Button size="BIG" text="인증" />
        <Spacing direction="vertical" size={1} />
        <StyledInfoText>
          이메일은 암호화하여 저장되며, 중복가입 방지 용도로만 쓰이며 데이터베이스에 이메일 주소
          그대로 저장되지 않습니다.
        </StyledInfoText>
      </CustomTabPanel>
    </>
  );
};
