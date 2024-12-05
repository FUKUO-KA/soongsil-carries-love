import { useRegisterForm } from '@/hooks/useRegisterForm';
import { Spacing } from '@/components/Spacing/Spacing';
import { TextField } from '@/components/TextField/TextField';
import { Button } from '@/components/Button/Button';
import { StyledRegisterDetailContainer } from './RegisterDetail.style';

export const RegisterDetail = () => {
  const { control, handleSubmit, formState, onSubmit, password } = useRegisterForm();
  const { isValid } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledRegisterDetailContainer>
        <Spacing direction="vertical" size={19} />
        <TextField
          name="nickname"
          title="닉네임"
          description="닉네임을 입력해주세요..."
          control={control}
          rules={{
            required: '닉네임을 입력하세요.',
            maxLength: { value: 20, message: '닉네임은 20자 이내로 입력해주세요.' },
          }}
        />
        <TextField
          name="password"
          title="비밀번호"
          description="비밀번호를 입력해주세요..."
          control={control}
          rules={{
            required: '비밀번호를 입력하세요.',
            minLength: { value: 6, message: '비밀번호는 6자 이상이어야 합니다.' },
          }}
        />
        <TextField
          name="confirmPassword"
          title="비밀번호 확인"
          description="입력하신 비밀번호를 확인해주세요..."
          control={control}
          rules={{
            required: '비밀번호 확인을 입력하세요.',
            validate: (value: string) => value === password || '비밀번호가 일치하지 않습니다.',
          }}
        />
        <TextField
          name="gender"
          title="성별"
          isSelectGender
          control={control}
          rules={{ required: '성별을 선택하세요.' }}
        />
        <TextField
          name="studentId"
          title="학번"
          description="학번을 입력해주세요... ex) 20, 19"
          control={control}
          rules={{
            required: '학번을 입력하세요.',
            pattern: { value: /^[0-9]{2}$/, message: '학번은 두 자리 숫자로 입력해주세요.' },
          }}
        />
        <TextField
          name="college"
          title="단과대학"
          description="단과대학을 입력해주세요 (선택)"
          control={control}
        />
        <TextField
          name="department"
          title="학과/학부"
          description="학과/학부를 입력해주세요 (선택)"
          control={control}
        />
        <Spacing direction="vertical" size={10} />
        <Button size="BIG" text="확인" type="submit" disabled={!isValid} />
      </StyledRegisterDetailContainer>
    </form>
  );
};
