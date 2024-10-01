import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('bg-white rounded-lg shadow-md overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('px-6 py-4 border-b', className)} {...props}>
      {children}
    </div>
  );
};

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={cn('relative w-full h-64 md:h-96', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-t-lg"
      />
    </div>
  );
};

export const CardBody: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('px-6 py-4 border-t', className)} {...props}>
      {children}
    </div>
  );
};
