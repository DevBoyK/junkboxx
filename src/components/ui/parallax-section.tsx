"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxContentProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxContent({
  children,
  className,
  speed = 0.5,
}: ParallaxContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
} 