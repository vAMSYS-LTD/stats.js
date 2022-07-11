import { Configuration } from "../types/settings";

export class ConfigurationService {
  constructor(private config: Configuration) {}

  getConfig(): Configuration {
    return this.config;
  }
}