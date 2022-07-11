import { ConfigurationService } from "./config-service";

export class LoggingService {

  constructor(private configService: ConfigurationService) {
    if (configService.getConfig().logDebugMessages) {
      this.log("logging is enabled");
    }
  }

  log(message: string) {
    if (this.configService.getConfig().logDebugMessages) {
      console.log(`[stats.js INF] ${message}`);
    }
  }

  error(message: string) {
    console.log(`[stats.js ERR] ${message}`);
  }
}