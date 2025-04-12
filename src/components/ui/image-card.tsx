import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ src, alt, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-lg',
          className
        )}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {children && (
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
            {children}
          </div>
        )}
      </div>
    );
  }
);
ImageCard.displayName = 'ImageCard';

export { ImageCard }; 