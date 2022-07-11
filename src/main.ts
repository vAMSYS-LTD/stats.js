import { PendingModifier } from "./modifiers/pending-modifier";
import { ConfigurationService } from "./services/config-service";
import { LoggingService } from "./services/logging-service";
import { StatisticsService } from "./services/statistics-service";
import { Configuration } from "./types/settings";

export class StatsJs {
  private configService: ConfigurationService;
  private loggingService: LoggingService;
  private statisticsService: StatisticsService;
  
  constructor(options: Configuration) {
    this.configService = new ConfigurationService(options);
    this.loggingService = new LoggingService(this.configService);
    this.statisticsService = new StatisticsService(this.configService, this.loggingService);
  }

  replace(id: string) {
    return new PendingModifier(this.configService, this.loggingService, this.statisticsService, id);
  }
}

export function vamsysStats(options: Configuration): StatsJs {
  return new StatsJs(options);
}