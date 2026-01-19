// components/ui/Table.tsx
import React from 'react';
import { cn } from '../../lib/utils';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={cn('w-full', className)}>{children}</table>
    </div>
  );
}

export function TableHeader({ children, className }: TableProps) {
  return (
    <thead className={className}>
      <tr className="border-b border-gray-200 dark:border-gray-700">{children}</tr>
    </thead>
  );
}

export function TableBody({ children, className }: TableProps) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableRow({ children, className }: TableProps) {
  return <tr className={cn('border-b border-gray-200 dark:border-gray-700', className)}>{children}</tr>;
}

export function TableHead({ children, className }: TableProps) {
  return <th className={cn('text-left py-4 px-4', className)}>{children}</th>;
}

export function TableCell({ children, className }: TableProps) {
  return <td className={cn('py-4 px-4', className)}>{children}</td>;
}