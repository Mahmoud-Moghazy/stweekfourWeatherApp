export interface Condition {
  code: number;
  icon: string;
  text: string;
}

export interface AirQuality {
  co: number;
  gb_defra_index: number;
  no2: number;
  o3: number;
  pm2_5: number;
  pm10: number;
  so2: number;
  us_epa_index: number;
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
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: Condition;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  snow_cm: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

export interface Day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: Condition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

export interface Location {
  readonly country: string;
  readonly lat: number;
  readonly localtime: string;
  readonly localtime_epoch: number;
  readonly lon: number;
  readonly name: string;
  readonly region: string;
  readonly tz_id: string;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  astro?: Astro;
  day?: Day;
  hour: Hour[];
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherData {
  current?: Current;
  location?: Location;
  forecast?: Forecast;
}
