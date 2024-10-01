'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src: string | null | undefined;
  fallbackSrc?: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | 'auto';
  fit?: 'cover' | 'contain' | 'fill';
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  fallbackSrc = '/images/placeholder.jpg', // Adjust this to your default placeholder image path
  aspectRatio = 'auto',
  fit = 'cover',
  alt,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = React.useState(src || fallbackSrc);

  React.useEffect(() => {
    setImgSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  const aspectRatioClass = {
    square: 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    auto: '',
  }[aspectRatio];

  const fitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[fit];

  return (
    <div
      className={cn('relative overflow-hidden', aspectRatioClass, className)}
    >
      <Image
        src={imgSrc}
        alt={alt || 'Image'}
        fill
        className={cn(fitClass, 'transition-opacity duration-300')}
        onError={() => setImgSrc(fallbackSrc)}
        {...props}
      />
    </div>
  );
};
