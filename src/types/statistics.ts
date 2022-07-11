export interface Statistics {
  pireps: {
    total: number,
    today: number,
    yesterday: number,
    thirty: number,
    accepted: number,
    rejected: number,
    invalidated: number,
    manual: number,
    lastPirep: number
  },
  landing_rate: number,
  flight_time: {
    total: number,
    total_formatted: string,
    total_days: number,
    total_years: number,
    total_today: number,
    total_today_formatted: string,
    total_yesterday: number,
    total_yesterday_formatted: string,
    total_30: number,
    total_30_formatted: string,
    pirep: number,
    pirep_formatted: string
  },
  points: {
    regular: number,
    regular_today: number,
    regular_yesterday: number,
    regular_thirty: number,
    bonus: number,
    bonus_yesterday: number,
    bonus_thirty: number
  },
  pilots: {
    total: number,
    today: number,
    yesterday: number,
    thirty: number
  },
  general: {
    aircraft: number,
    pairs: number,
    routes: number,
    flying: number
  },
  generated_at: string
}