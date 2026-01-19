// components/ui/Input.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Typography } from './Typography';

const inputVariants = cva(
  'w-full rounded-lg border bg-white dark:bg-gray-800 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
        error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
      },
      inputSize: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-4 py-3 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  testField?: boolean; // Temporary test field marker
}

export function Input({
  variant,
  inputSize,
  className,
  label,
  error,
  prefix,
  suffix,
  testField,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Typography as="label" variant="label" color="secondary" htmlFor={props.id}>
          {label}
          {testField && (
            <span className="ml-2 text-xs text-red-600 dark:text-red-400">[TEST FIELD - NON-PRODUCTION]</span>
          )}
        </Typography>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {prefix}
          </span>
        )}
        <input
          className={cn(
            inputVariants({ variant: error ? 'error' : variant, inputSize }),
            prefix && 'pl-8',
            suffix && 'pr-8',
            className
          )}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <Typography variant="bodySmall" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Typography as="label" variant="label" color="secondary" htmlFor={props.id}>
          {label}
        </Typography>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 transition-colors',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
          className
        )}
        {...props}
      />
      {error && (
        <Typography variant="bodySmall" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
}