class Logger {
    info(message: string, ...args: any[]): void {
        console.log(`[${new Date().toISOString()}] INFO: ${message}`, ...args);
    }

    error(message: string, ...args: any[]): void {
        console.error(`[${new Date().toISOString()}] ERROR: ${message}`, ...args);
    }

    warn(message: string, ...args: any[]): void {
        console.warn(`[${new Date().toISOString()}] WARN: ${message}`, ...args);
    }
}

export const logger = new Logger();