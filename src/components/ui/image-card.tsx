"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  fallback?: React.ReactNode;
}

export function ImageCard({
  src,
  alt,
  className,
  children,
  fallback,
  ...props
}: ImageCardProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      {error ? (
        fallback
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {children}
      </div>
    </div>
  );
} 