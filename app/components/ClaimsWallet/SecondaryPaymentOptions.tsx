import React from 'react';
import { motion } from 'framer-motion';
import { PaymentOption } from './PaymentOption';
import { Typography } from '../ui/Typography';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: any;
  timeframe: string;
  priority: number;
  color: string;
}

interface SecondaryPaymentOptionsProps {
  paymentMethods: PaymentMethod[];
  onSelectMethod: (methodId: string) => void;
}

export function SecondaryPaymentOptions({ paymentMethods, onSelectMethod }: SecondaryPaymentOptionsProps) {
  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <motion.div className="max-w-5xl mx-auto mb-16" variants={cardContainerVariants} initial="hidden" animate="visible">
      <Typography variant="h2" align="center" className="mb-8">
        Select Payment Method
      </Typography>

      <div className="grid md:grid-cols-2 gap-6">
        {paymentMethods.map((method, index) => (
          <PaymentOption
            key={method.id}
            {...method}
            isPrimary={index === 0}
            onSelect={onSelectMethod}
          />
        ))}
      </div>
    </motion.div>
  );
}