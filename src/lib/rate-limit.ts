/**
 * @file rate-limit.ts
 * @description Rate limiting utility for API routes
 */

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  max: number; // Max number of requests per window
}

interface RateLimitInfo {
  limit: number;
  current: number;
  remaining: number;
  reset: number;
}

export class RateLimiter {
  private static instance: RateLimiter;
  private options: RateLimitOptions;
  private store: Map<string, { count: number; resetTime: number }>;

  private constructor(options: RateLimitOptions) {
    this.options = {
      windowMs: options.windowMs,
      max: options.max
    };
    this.store = new Map();
  }

  public static getInstance(options: RateLimitOptions = {
    windowMs: 60 * 1000, // 1 minute
    max: 100 // 100 requests per minute
  }): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter(options);
    }
    return RateLimiter.instance;
  }

  public checkLimit(key: string): RateLimitInfo {
    const now = Date.now();
    const record = this.store.get(key);

    if (!record) {
      this.store.set(key, {
        count: 1,
        resetTime: now + this.options.windowMs
      });
      return {
        limit: this.options.max,
        current: 1,
        remaining: this.options.max - 1,
        reset: now + this.options.windowMs
      };
    }

    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + this.options.windowMs;
      this.store.set(key, record);
      return {
        limit: this.options.max,
        current: 1,
        remaining: this.options.max - 1,
        reset: record.resetTime
      };
    }

    record.count += 1;
    this.store.set(key, record);
    return {
      limit: this.options.max,
      current: record.count,
      remaining: Math.max(0, this.options.max - record.count),
      reset: record.resetTime
    };
  }

  public isRateLimited(key: string): boolean {
    const info = this.checkLimit(key);
    return info.remaining <= 0;
  }

  public clearStore(): void {
    this.store.clear();
  }
}

export const rateLimiter = RateLimiter.getInstance({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}); 