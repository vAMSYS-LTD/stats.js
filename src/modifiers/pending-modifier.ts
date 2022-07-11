import { ConfigurationService } from "../services/config-service";
import { LoggingService } from "../services/logging-service";
import { StatisticsService } from "../services/statistics-service";
import { Statistics } from "../types/statistics";

type StatisticSelector = (stats: Statistics) => string | number;

export class PendingModifier {

  constructor(private configService: ConfigurationService, private loggingService: LoggingService, private statsService: StatisticsService, private elemId: string) {}

  async withVaStat(stat: StatisticSelector): Promise<void> {
    var stats = await this.statsService.fetchOrGet();

    let elem = document.getElementById(this.elemId);

    if (elem === null) {
      throw "cannot find element with ID " + this.elemId;
    }

    this.loggingService.log("found element with ID " + this.elemId);

    let replaceWith = stat(stats);
    elem.innerText = replaceWith.toString();
    this.loggingService.log(`replaced ${this.elemId} with ${replaceWith}`);
  }
}