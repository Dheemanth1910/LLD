enum LogLevel {
  NORMAL = 1,
  MEDIUM = 2,
  CRITICAL = 3,
}

interface LogMessage {
  level: LogLevel;
  text: string;
}

abstract class Logger {
  private next?: Logger;
  constructor(protected level: LogLevel) {}
  setNext(logger: Logger): Logger {
    this.next = logger;
    return logger;
  }
  log(message: LogMessage): void {
    if (message.level >= this.level) {
      this.write(message);
    }
    this.next?.log(message);
  }

  protected abstract write(message: LogMessage): void;
}

export class ConsoleLogger extends Logger {
  constructor() {
    super(LogLevel.NORMAL);
  }
  protected write(message: LogMessage): void {
    console.log(" Console Logging" + message.text);
  }
}

export class FileLogger extends Logger {
  constructor() {
    super(LogLevel.MEDIUM);
  }
  protected write(message: LogMessage): void {
    console.log(" Logging to File " + message.text);
  }
}

export class AlertLogger extends Logger {
  constructor() {
    super(LogLevel.CRITICAL);
  }
  protected write(message: LogMessage): void {
    console.log(" Sending Alerts ! ! " + message.text);
  }
}
