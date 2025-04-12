/**
 * @file rate-limit.ts
 * @description Rate limiting utility for API routes
 */

interface RateLimitOptions {
  windowMs: number;
  max: number;
  message?: string;
}

interface RateLimitData {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private static instance: RateLimiter;
  private limits: Map<string, RateLimitData>;
  private options: RateLimitOptions;

  private constructor(options: RateLimitOptions) {
    this.limits = new Map();
    this.options = {
      windowMs: options.windowMs || 15 * 60 * 1000, // 15 minutes
      max: options.max || 100,
      message: options.message || 'Too many requests, please try again later.',
    };
  }

  public static getInstance(options: RateLimitOptions = {}): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter(options);
    }
    return RateLimiter.instance;
  }

  public check(key: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const limit = this.limits.get(key);

    if (!limit || now > limit.resetTime) {
      this.limits.set(key, {
        count: 1,
        resetTime: now + this.options.windowMs,
      });
      return {
        allowed: true,
        remaining: this.options.max - 1,
        resetTime: now + this.options.windowMs,
      };
    }

    if (limit.count >= this.options.max) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: limit.resetTime,
      };
    }

    limit.count++;
    return {
      allowed: true,
      remaining: this.options.max - limit.count,
      resetTime: limit.resetTime,
    };
  }

  public reset(key: string): void {
    this.limits.delete(key);
  }

  public resetAll(): void {
    this.limits.clear();
  }
}

export const rateLimiter = RateLimiter.getInstance({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
}); 