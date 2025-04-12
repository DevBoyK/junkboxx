"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function ImageCard({ src, alt, className, children }: ImageCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="object-cover w-full h-full"
      />
      {children && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          {children}
        </div>
      )}
    </div>
  );
} 