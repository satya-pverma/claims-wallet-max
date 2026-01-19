// components/ui/Card.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva('rounded-xl transition-shadow', {
  variants: {
    variant: {
      default: 'bg-white dark:bg-gray-800 shadow-lg',
      bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
      elevated: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
      ghost: 'bg-transparent',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ variant, padding, className, children, onClick }: CardProps) {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={cn(cardVariants({ variant, padding }), onClick && 'cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mt-4', className)}>{children}</div>;
}