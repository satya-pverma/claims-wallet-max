import React from 'react';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/Table';

interface Transaction {
  date: string;
  description: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  method: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

function StatusBadge({ status }: { status: Transaction['status'] }) {
  const variants = {
    completed: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    pending: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    failed: 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${variants[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <Card>
        <Typography variant="h2" className="mb-6">
          Recent Transactions
        </Typography>

        <Table>
          <TableHeader>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusBadge status={transaction.status} />
                </TableCell>
                <TableCell>{transaction.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}