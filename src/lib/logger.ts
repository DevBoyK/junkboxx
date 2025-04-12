/**
 * @file logger.ts
 * @description Centralized logging system with different log levels and error tracking
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogOptions {
  context?: string;
  error?: Error;
  metadata?: Record<string, unknown>;
}

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, options: LogOptions = {}): string {
    const timestamp = new Date().toISOString();
    const context = options.context ? `[${options.context}]` : '';
    const metadata = options.metadata ? JSON.stringify(options.metadata) : '';
    
    return `${timestamp} ${level.toUpperCase()} ${context} ${message} ${metadata}`;
  }

  private log(level: LogLevel, message: string, options: LogOptions = {}) {
    const formattedMessage = this.formatMessage(level, message, options);
    
    switch (level) {
      case 'debug':
        if (this.isDevelopment) {
          console.debug(formattedMessage);
        }
        break;
      case 'info':
        console.info(formattedMessage);
        break;
      case 'warn':
        console.warn(formattedMessage);
        break;
      case 'error':
        console.error(formattedMessage);
        if (options.error) {
          console.error(options.error);
        }
        // Here you can add error reporting service integration
        // e.g., Sentry, LogRocket, etc.
        break;
    }
  }

  public debug(message: string, options?: LogOptions) {
    this.log('debug', message, options);
  }

  public info(message: string, options?: LogOptions) {
    this.log('info', message, options);
  }

  public warn(message: string, options?: LogOptions) {
    this.log('warn', message, options);
  }

  public error(message: string, options?: LogOptions) {
    this.log('error', message, options);
  }
}

export const logger = Logger.getInstance(); 