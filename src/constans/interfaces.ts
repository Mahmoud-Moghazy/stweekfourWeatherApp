export interface Condition {
  code: number;
  icon: string;
  text: string;
}

export interface AirQuality {
  co: number;
  gbDefraIndex: number; // Renamed for consistency with camelCase.
  no2: number;
  o3: number;
  pm25: number; // No need for `_`, rename to camelCase.
  pm10: number;
  so2: number;
  usEpaIndex: number;
}

export interface Current {
  condition: Condition;
  air_quality: AirQuality; 
  cloud: number;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number; 
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: boolean;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

export interface Astro {
  isMoonUp: boolean;
  isSunUp: boolean;
  moonIllumination: number;
  moonPhase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

export interface Hour {
  condition: Condition;
  hasChanceOfRain: boolean;
  hasChanceOfSnow: boolean;
  dewpointC: number;
  dewpointF: number;
  feelsLikeC: number;
  feelsLikeF: number;
  gustKph: number;
  gustMph: number;
  heatIndexC: number;
  heatIndexF: number;
  humidity: number;
  isDay: boolean;
  precipIn: number;
  precipMm: number;
  pressureIn: number;
  pressureMb: number;
  snowCm: number;
  temp_c: number;
  temp_f: number;
  time: string;
  timeEpoch: number;
  uv: number;
  visKm: number;
  visMiles: number;
  willItRain: number;
  willItSnow: number;
  windDegree: number;
  windDir: string;
  windKph: number;
  windMph: number;
  windChillC: number;
  windChillF: number;
}

export interface Day {
  condition: Condition;
  avgHumidity: number;
  avgtemp_c: number;
  avgTemp_f: number;
  avgVisKm: number;
  avgVisMiles: number;
  dailyChanceOfRain: boolean;
  dailyChanceOfSnow: boolean;
  dailyWillItRain: boolean;
  dailyWillItSnow: boolean;
  maxtemp_c: number;
  maxTempF: number;
  maxWindKph: number;
  maxWindMph: number;
  mintemp_c: number;
  minTempF: number;
  totalPrecipIn: number;
  totalPrecipMm: number;
  totalSnowCm: number;
  uv: number;
}

export interface Location {
  readonly country: string;
  readonly lat: number;
  readonly localtime: string;
  readonly localtimeEpoch: number;
  readonly lon: number;
  readonly name: string;
  readonly region: string;
  readonly tzId: string;
}

export interface ForecastDay {
  date: string;
  dateEpoch: number;
  astro?: Astro;
  day?: Day;
  hour: Hour[];
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherData { 
  current: Current;
  location: Location;
  forecast?: Forecast;
}
