import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typography } from '../ui/Typography';

interface PaymentOptionProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  timeframe: string;
  isPrimary?: boolean;
  onSelect: (id: string) => void;
}

export function PaymentOption({ id, name, description, icon: Icon, timeframe, isPrimary, onSelect }: PaymentOptionProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isPrimary) {
    return (
      <motion.div variants={cardVariants} className="md:col-span-2">
        <button
          onClick={() => onSelect(id)}
          className="w-full bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-600/50 dark:border-blue-500/30 flex md:flex-row flex-col items-center text-left gap-6 relative overflow-hidden group"
        >
          {/* Virtual Card Visual */}
          <div className="w-[200px] h-[120px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex-shrink-0 shadow-lg relative">
            <div className="absolute top-2 left-2">
              <img src="/Juice-2024-Logo-2000x800.png" alt="Juice Financial" className="h-6" />
            </div>
            <div className="absolute bottom-2 right-2">
              <img
                src="https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                alt="Mastercard"
                className="h-6"
              />
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70">**** 4444</div>
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Icon className="h-6 w-6" />
              </div>
              <Typography variant="h3">{name}</Typography>
              <div className="ml-auto">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  INSTANT
                </span>
              </div>
            </div>
            <Typography color="secondary" className="mb-2">
              {description}
            </Typography>
            <div className="flex items-center text-blue-600">
              <Typography weight="medium">Select Virtual Card</Typography>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div variants={cardVariants}>
      <button
        onClick={() => onSelect(id)}
        className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col text-left gap-4 relative overflow-hidden group"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            <Icon className="h-5 w-5" />
          </div>
          <Typography variant="h4">{name}</Typography>
        </div>
        <Typography variant="bodySmall" color="secondary">
          {description}
        </Typography>
        <div className="mt-auto flex items-center justify-between">
          <Typography variant="caption" color="muted" className="flex items-center gap-1">
            {timeframe}
          </Typography>
          <span className="text-blue-600 flex items-center text-sm">
            <Typography variant="bodySmall">Select</Typography>
            <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="absolute inset-0 bg-gray-600/5 dark:bg-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </motion.div>
  );
}
