import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn('min-w-full divide-y divide-gray-200', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export const TableHead: React.FC<
  React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({ children, className, ...props }) => {
  return (
    <thead className={cn('bg-gray-50', className)} {...props}>
      {children}
    </thead>
  );
};

export const TableBody: React.FC<
  React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({ children, className, ...props }) => {
  return (
    <tbody
      className={cn('bg-white divide-y divide-gray-200', className)}
      {...props}
    >
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<
  React.TableHTMLAttributes<HTMLTableRowElement>
> = ({ children, className, ...props }) => {
  return (
    <tr className={cn('', className)} {...props}>
      {children}
    </tr>
  );
};

export const TableCell: React.FC<
  React.TdHTMLAttributes<HTMLTableCellElement>
> = ({ children, className, ...props }) => {
  return (
    <td className={cn('px-6 py-4 whitespace-nowrap', className)} {...props}>
      {children}
    </td>
  );
};

export const TableHeaderCell: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ children, className, ...props }) => {
  return (
    <th
      className={cn(
        'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};
