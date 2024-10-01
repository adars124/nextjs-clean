import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  target,
  ...props
}) => {
  const baseStyles = cn(
    'font-semibold rounded-md transition-colors duration-300',
    {
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
      'border border-blue-600 text-blue-600 hover:bg-blue-50':
        variant === 'outline',
    },
    {
      'px-3 py-1 text-sm': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};
