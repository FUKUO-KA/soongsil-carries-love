import { Spacing } from '@/components/Spacing/Spacing';
import { TextField } from '@/components/TextField/TextField';
import { Button } from '@/components/Button/Button';
import { StyledConfirmBtnContainer, StyledRegisterDetailContainer } from './RegisterDetail.style';

export const RegisterDetail = () => {
  return (
    <StyledRegisterDetailContainer>
      <Spacing direction="vertical" size={19} />
      <TextField
        description="닉네임을 입력해주세요..."
        title="닉네임"
        required={true}
        isCertificate={true}
      />
      <StyledConfirmBtnContainer>
        <Button size="SMALL" text="인증번호" />
      </StyledConfirmBtnContainer>
      <TextField description="비밀번호를 입력해주세요..." title="비밀번호" required={true} />
      <TextField
        description="입력하신 비밀번호를 확인해주세요..."
        title="비밀번호 확인"
        required={true}
      />
      <TextField description="단과대학를 입력해주세요 (선택)" title="단과대학" />
      <TextField description="학과/학부을 확인해주세요 (선택)" title="학과/학부" />
      <TextField description="학번을 입력해주세요 (선택)" title="학번" />
      <Spacing direction="vertical" size={10} />
      <Button size="BIG" text="확인" />
    </StyledRegisterDetailContainer>
  );
};
