// components/ui/Typography.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-5xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-xl font-bold',
      h4: 'text-lg font-semibold',
      h5: 'text-base font-semibold',
      h6: 'text-sm font-semibold',
      body: 'text-base',
      bodySmall: 'text-sm',
      label: 'text-sm font-medium',
      caption: 'text-xs',
      lead: 'text-xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
      muted: 'text-gray-500 dark:text-gray-500',
      accent: 'text-blue-600 dark:text-blue-400',
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      warning: 'text-amber-600 dark:text-amber-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'primary',
    align: 'left',
  },
});

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div' | 'b' | 'i' | 'strong' | 'em';

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: TypographyElement;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export function Typography({
  as: Component = 'p',
  variant,
  weight,
  color,
  align,
  className,
  children,
  htmlFor,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(typographyVariants({ variant, weight, color, align }), className)}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Component>
  );
}