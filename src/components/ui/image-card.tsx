"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  className?: string;
  priority?: boolean;
}

export function ImageCard({
  src,
  alt,
  title,
  description,
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card",
        className
      )}
    >
      <div className="aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
} 