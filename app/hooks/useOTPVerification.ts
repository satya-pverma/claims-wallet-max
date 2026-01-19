import { useState } from 'react';

interface UseOTPVerificationProps {
  onSuccess: () => void;
  validOTP?: string;
}

export function useOTPVerification({ onSuccess, validOTP = '123456' }: UseOTPVerificationProps) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleOTPChange = (value: string) => {
    const cleanedValue = value.replace(/\D/g, '').slice(0, 6);
    setOtp(cleanedValue);
    setError('');
  };

  const verify = () => {
    if (otp.length !== 6) {
      setError('Please enter a 6-digit code');
      return false;
    }

    if (otp === validOTP) {
      onSuccess();
      reset();
      return true;
    } else {
      setError('Invalid verification code');
      return false;
    }
  };

  const reset = () => {
    setOtp('');
    setError('');
  };

  return {
    otp,
    error,
    acceptedTerms,
    handleOTPChange,
    setAcceptedTerms,
    verify,
    reset,
  };
}