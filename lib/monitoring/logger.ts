export class Logger {
  log(message: string, data?: any) {
    console.log(`[LOG] ${message}`, data);
  }

  error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error);
  }

  warn(message: string, data?: any) {
    console.warn(`[WARN] ${message}`, data);
  }
}

export default new Logger();
