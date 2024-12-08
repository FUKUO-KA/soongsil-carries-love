import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledTabPanelContainer } from '@/components/CustomTabs/CustomTabPanel/CustomTabPanel.style';
import { Button } from '@/components/Button/Button';
import { Spacing } from '@/components/Spacing/Spacing';
import { TextField } from '@/components/TextField/TextField';
import { login } from '@/api/endpoints/login';
import { useState } from 'react';
import useUserStore from '@/stores/userStore';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '@/api/types/response';

interface FormData {
  email: string;
  password: string;
}

export const LoginPanel = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid, isSubmitting },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const response: LoginResponse = await login(data);
      setUser({ email: data.email, password: data.password });
      alert('로그인에 성공했습니다!');
      navigate('/home');
      sessionStorage.setItem('user', JSON.stringify(response));
    } catch (error: any) {
      setError('email', {
        type: 'manual',
        message: '로그인에 실패했습니다. 다시 시도해주세요.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledTabPanelContainer>
        <TextField
          name="email"
          title="이메일"
          description="이메일을 입력하세요..."
          control={control}
          rules={{
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '유효한 이메일 주소를 입력하세요.',
            },
          }}
        />
        <TextField
          name="password"
          type="password"
          title="비밀번호"
          description="비밀번호를 입력하세요..."
          control={control}
          rules={{
            required: '비밀번호를 입력하세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자 이상이어야 합니다.',
            },
          }}
        />
        <Spacing direction="vertical" size={10} />
        <Button
          size="BIG"
          text="로그인"
          type="submit"
          disabled={!isValid || isSubmitting || isLoading}
        />
      </StyledTabPanelContainer>
    </form>
  );
};
