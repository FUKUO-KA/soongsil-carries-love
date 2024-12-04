import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useJoinStore from '@/stores/joinStore';
import { join } from '@/api/endpoints/join';

interface FormData {
  nickname: string;
  password: string;
  confirmPassword: string;
  studentId: string;
  college?: string;
  department?: string;
  gender: string;
}

export const useRegisterForm = () => {
  const { control, handleSubmit, setError, watch, formState } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      password: '',
      confirmPassword: '',
      studentId: '',
      college: '',
      department: '',
      gender: '',
    },
  });

  const { updateJoinField, joinRequest } = useJoinStore();
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    updateJoinField({
      nickname: data.nickname,
      password: data.password,
      studentId: data.studentId,
      college: data.college,
      department: data.department,
      gender: data.gender,
    });

    try {
      await join(joinRequest);
      alert('회원가입이 완료되었습니다!');
      navigate('/home');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
    password,
  };
};
