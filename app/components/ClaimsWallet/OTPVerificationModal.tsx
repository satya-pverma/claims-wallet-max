import React from 'react';
import { KeyRound, ArrowRight } from 'lucide-react';
import { Modal, ModalHeader, ModalContent } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Typography } from '../ui/Typography';
import { useOTPVerification } from '@/app/hooks/useOTPVerification';
import { Button } from '../ui/Button';


interface OTPVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function OTPVerificationModal({ isOpen, onClose, onSuccess }: OTPVerificationModalProps) {
  const { otp, error, acceptedTerms, handleOTPChange, setAcceptedTerms, verify, reset } = useOTPVerification({
    onSuccess,
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleVerify = () => {
    if (verify()) {
      handleClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader icon={<KeyRound className="h-6 w-6 text-blue-600" />} onClose={handleClose}>
        Verify Identity
      </ModalHeader>

      <ModalContent>
        <Typography color="secondary" className="mb-6">
          For your security, please enter the 6-digit verification code sent to your registered phone number.
        </Typography>

        <Input
          type="text"
          value={otp}
          onChange={(e) => handleOTPChange(e.target.value)}
          placeholder="Enter 6-digit code"
          className="text-center text-2xl tracking-wider"
          maxLength={6}
          error={error}
        />

        <Button
          onClick={handleVerify}
          disabled={!acceptedTerms}
          fullWidth
          icon={<ArrowRight className="h-5 w-5" />}
          className="mt-4"
        >
          Verify Code
        </Button>

        <div className="text-center mt-4">
          <Button variant="link" size="sm">
            Resend Code
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <Typography as="label" htmlFor="terms" variant="bodySmall" color="secondary">
            I accept the{' '}
            <a
              href="https://juicefin.com/wp-content/uploads/2024/10/CLL-09272024-001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Cardholder Terms & Conditions
            </a>
          </Typography>
        </div>
      </ModalContent>
    </Modal>
  );
}