import React from 'react';
import { Wallet, DollarSign, Clock, Shield, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal, ModalHeader, ModalContent } from '../ui/Modal';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { useTransfer } from '@/app/hooks/useTransfer';


interface PaymentTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethod: string;
  balance: number;
}

export function PaymentTransferModal({ isOpen, onClose, paymentMethod, balance }: PaymentTransferModalProps) {
  const { amount, inProgress, success, handleAmountChange, transfer, reset, isValid } = useTransfer({
    maxAmount: balance,
    onSuccess: onClose,
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const timeframeText = {
    'Virtual Card': 'Available immediately',
    'Direct to Visa/Mastercard': 'Typically takes 10-30 minutes',
    'ACH to Bank': 'Processing time: 1-3 business days',
    eCheck: 'Delivery time: 5-7 business days',
  };

  if (success) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent className="py-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <Typography variant="h3" className="mb-2">
            Transfer Successful!
          </Typography>
          <Typography color="secondary" className="mb-6">
            ${parseFloat(amount).toFixed(2)} has been sent to your {paymentMethod.toLowerCase()}.
          </Typography>
          <Button onClick={handleClose} variant="ghost">
            Close
          </Button>
        </ModalContent>
      </Modal>
    );
  }

  if (inProgress) {
    return (
      <Modal isOpen={isOpen} onClose={() => {}}>
        <ModalHeader icon={<Wallet className="h-6 w-6 text-blue-600" />}>Processing...</ModalHeader>
        <ModalContent className="py-10 flex flex-col items-center justify-center">
          <div className="mb-6">
            <motion.div
              className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <Typography color="secondary" align="center">
            Transferring funds to your {paymentMethod.toLowerCase()}...
          </Typography>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader icon={<Wallet className="h-6 w-6 text-blue-600" />} onClose={handleClose}>
        Transfer to {paymentMethod}
      </ModalHeader>

      <ModalContent>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex items-center">
          <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
          <div>
            <Typography variant="bodySmall" color="secondary">
              Available Balance
            </Typography>
            <Typography variant="h3">${balance.toLocaleString()}</Typography>
          </div>
        </div>

        <Input
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
          label="Transfer Amount"
          placeholder="0.00"
          prefix="$"
          min="0.01"
          max={balance}
          step="0.01"
          testField={true}
        />

        {paymentMethod === 'ACH to Bank' && (
          <div className="space-y-4 mt-4">
            <Input label="Bank Name" placeholder="Enter bank name" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Routing Number" placeholder="9 digits" />
              <Input label="Account Number" placeholder="Account number" />
            </div>
          </div>
        )}

        {paymentMethod === 'Direct to Visa/Mastercard' && (
          <div className="space-y-4 mt-4">
            <Input label="Card Number" placeholder="Card number" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Expiration Date" placeholder="MM/YY" />
              <Input label="Zip Code" placeholder="Billing zip code" />
            </div>
          </div>
        )}

        {paymentMethod === 'eCheck' && (
          <div className="mt-4">
            <Textarea label="Mailing Address" placeholder="Enter your mailing address" rows={3} />
          </div>
        )}

        <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <Typography variant="bodySmall" color="secondary">
              {timeframeText[paymentMethod as keyof typeof timeframeText]}
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <Typography variant="bodySmall" color="secondary">
              Secure, encrypted transfer
            </Typography>
          </div>
        </div>

        <Button
          onClick={transfer}
          disabled={!isValid()}
          fullWidth
          icon={<ArrowRight className="h-5 w-5" />}
        >
          Transfer Funds
        </Button>
      </ModalContent>
    </Modal>
  );
}