import { useMutation } from '@tanstack/react-query';
import { checkAuthNum } from '@/api/endpoints/mail/checkAuthNum';
import { useNavigate } from 'react-router-dom';
import useJoinStore from '@/stores/joinStore';

interface VerifyCodeInput {
  email: string;
  authCode: number;
}

export const useVerifyCode = () => {
  const navigate = useNavigate();
  const { updateJoinField } = useJoinStore();

  const verifyCodeMutation = useMutation({
    mutationFn: async ({ email, authCode }: VerifyCodeInput) => {
      await checkAuthNum(authCode, email);
    },
    onSuccess: (_, variables) => {
      updateJoinField({ email: variables.email });
      alert('인증에 성공했습니다.');
      navigate('/sign/select-school');
    },
    onError: () => {
      alert('인증번호 검증 실패:');
    },
  });

  return {
    verifyCodeMutation,
  };
};
