import { Statistics } from "../types/statistics";
import { ConfigurationService } from "./config-service";
import { LoggingService } from "./logging-service";

export class StatisticsService {

  private stats?: Statistics;

  constructor(private configService: ConfigurationService, private loggingService: LoggingService) {}

  async fetchStats(): Promise<void> {
    var baseUrl = this.configService.getConfig().baseUrl ?? "https://vamsys.io/statistics/";
    var url = baseUrl + this.configService.getConfig().uuid;
    this.loggingService.log("statistics from " + url);

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      this.stats = await data;
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }

  getStats(): Statistics | undefined {
    return this.stats;
  }

  async fetchOrGet(): Promise<Statistics> {
    if (this.stats === undefined) {
      await this.fetchStats();
      return this.stats!;
    } else {
      return this.stats!;
    }
  }
}