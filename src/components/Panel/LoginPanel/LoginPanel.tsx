import { Button } from '../../Button/Button';
import { Spacing } from '../../Spacing/Spacing';
import { TextField } from '../../TextField/TextField';

export const LoginPanel = () => {
  return (
    <>
      <TextField title="이메일" description="이메일을 입력하세요..." />
      <TextField type="password" title="비밀번호" description="비밀번호를 입력하세요..." />
      <Spacing direction="vertical" size={10} />
      <Button size="BIG" text="로그인" />
    </>
  );
};
