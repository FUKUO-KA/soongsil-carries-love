import { Button } from '@/components/Button/Button';
import { Spacing } from '@/components/Spacing/Spacing';
import { TextField } from '@/components/TextField/TextField';
import {
  StyledCertificateBtnContainer,
  StyledInfoText,
  StyledTimerContainer,
  StyledTimerText,
} from './RegisterPanel.style';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { StyledTabPanelContainer } from '@/components/CustomTabs/CustomTabPanel/CustomTabPanel.style';
import { useSendEmail } from '@/hooks/useSendEmail';
import { useVerifyCode } from '@/hooks/useVerifyCode';

interface FormData {
  email: string;
  authCode: string;
}

export const RegisterPanel = () => {
  const { control, handleSubmit, setError, clearErrors, formState } = useForm<FormData>({
    mode: 'onChange',
  });
  const { isSubmitting, isValid } = formState;

  const email = useWatch({ control, name: 'email' });

  const { sendEmailMutation, isEmailSent, timer, startTimer } = useSendEmail();
  const { verifyCodeMutation } = useVerifyCode();

  const handleSendEmail = () => {
    if (!email) {
      setError('email', { type: 'manual', message: '이메일을 입력하세요.' });
      return;
    }

    clearErrors('email');
    sendEmailMutation.mutate(email, {
      onSuccess: () => {
        startTimer();
        alert('인증번호가 발송되었습니다.');
      },
      onError: () => {
        setError('email', { type: 'manual', message: '메일 전송에 실패했습니다.' });
      },
    });
  };

  const handleVerifyCode: SubmitHandler<FormData> = ({ email, authCode }) => {
    verifyCodeMutation.mutate(
      { email, authCode: Number(authCode) },
      {
        onError: () => {
          setError('authCode', { type: 'manual', message: '인증번호가 잘못되었습니다.' });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(handleVerifyCode)}>
      <StyledTabPanelContainer>
        <TextField
          name="email"
          title="이메일"
          description="@soongsil.ac.kr 또는 @ssu.ac.kr"
          control={control}
          rules={{
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(soongsil\.ac\.kr|ssu\.ac\.kr)$/,
              message: '유효한 이메일 주소를 입력하세요.',
            },
          }}
        />
        <StyledCertificateBtnContainer>
          <Button
            size="SMALL"
            text="인증번호"
            onClick={handleSendEmail}
            disabled={isEmailSent || isSubmitting || !email}
          />
        </StyledCertificateBtnContainer>
        <TextField
          name="authCode"
          type="password"
          title="인증번호"
          description="인증번호를 입력하세요..."
          control={control}
          rules={{ required: '인증번호를 입력하세요.' }}
        />
        <StyledTimerContainer>
          {isEmailSent && timer > 0 && (
            <StyledTimerText>
              {String(Math.floor(timer / 60)).padStart(2, '0')}:
              {String(timer % 60).padStart(2, '0')}
            </StyledTimerText>
          )}
        </StyledTimerContainer>
        <Spacing direction="vertical" size={10} />
        <Button size="BIG" text="인증" type="submit" disabled={!isValid || isSubmitting} />
        <Spacing direction="vertical" size={1} />
        <StyledInfoText>
          이메일은 암호화하여 저장되며, 중복가입 방지 용도로만 쓰이며 데이터베이스에 이메일 주소
          그대로 저장되지 않습니다.
        </StyledInfoText>
      </StyledTabPanelContainer>
    </form>
  );
};
