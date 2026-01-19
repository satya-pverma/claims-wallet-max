import { useState } from 'react';

interface UseTransferProps {
  maxAmount: number;
  onSuccess: () => void;
}

export function useTransfer({ maxAmount, onSuccess }: UseTransferProps) {
  const [amount, setAmount] = useState('');
  const [inProgress, setInProgress] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const isValid = () => {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount > 0 && numAmount <= maxAmount;
  };

  const transfer = () => {
    if (!isValid()) return;

    setInProgress(true);

    setTimeout(() => {
      setInProgress(false);
      setSuccess(true);

      setTimeout(() => {
        onSuccess();
        reset();
      }, 2000);
    }, 1500);
  };

  const reset = () => {
    setAmount('');
    setSuccess(false);
    setInProgress(false);
  };

  return {
    amount,
    inProgress,
    success,
    handleAmountChange,
    transfer,
    reset,
    isValid,
  };
}