import { useMutation } from '@tanstack/react-query';
import { sendmail } from '@/api/endpoints/mail/sendAuthNum';
import { useState, useRef } from 'react';

export const useSendEmail = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(300);
  const timerRef = useRef<number>(300);
  const intervalRef = useRef<number | null>(null);

  const sendEmailMutation = useMutation({
    mutationFn: async (email: string) => {
      await sendmail(email);
    },
    onSuccess: () => {
      setIsEmailSent(true);
      timerRef.current = 300;
      setDisplayTimer(300);
      startTimer();
    },
    onError: () => {
      alert('이메일 전송 실패');
    },
  });

  const startTimer = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      if (timerRef.current <= 1) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIsEmailSent(false);
        timerRef.current = 0;
        setDisplayTimer(0);
        return;
      }

      timerRef.current -= 1;
      setDisplayTimer(timerRef.current);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return {
    sendEmailMutation,
    isEmailSent,
    timer: displayTimer,
    startTimer,
    stopTimer,
  };
};
