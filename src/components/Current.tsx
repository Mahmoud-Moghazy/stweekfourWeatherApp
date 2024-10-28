import React from "react";
import { WeatherData } from "../constans/interfaces";

const Current: React.FC<WeatherData> = ({ forecast, location }) => {
  console.log(forecast)
  console.log(location)
  const avgtemp_c = Number(forecast?.forecastday[0].day?.avgtemp_c);
  const maxtemp_c = Number(forecast?.forecastday[0]?.day?.maxtemp_c);
  const mintemp_c = Number(forecast?.forecastday[0]?.day?.mintemp_c);
  const condition = forecast?.forecastday[0]?.day?.condition.text;
  const icon = forecast?.forecastday[0]?.day?.condition.icon;
  const maxtemp_f = Number(forecast?.forecastday[0]?.day?.maxtemp_f);
  const mintemp_f = Number(forecast?.forecastday[0]?.day?.mintemp_f);

  return (
    <section className="text-white p-5 text-center drop-shadow-lg">
      <h2 className="text-2xl mb-3 drop-shadow-xl">
        {location?.name}, {location?.region}, {location?.country}
      </h2>
      <span className="drop-shadow-lg">
        {new Date(location?.localtime || new Date).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
      <div className="flex items-center justify-evenly mt-5">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-8xl drop-shadow-lg">
              {Math.round(avgtemp_c)}°
            </span>
            <span>{condition}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>°C</span>
            <span>L : {Math.round(mintemp_c)}</span>
            <span>H : {Math.round(maxtemp_c)}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>°F</span>
            <span>L : {Math.round(mintemp_f)}</span>
            <span>H : {Math.round(maxtemp_f)}</span>
          </div>
        </div>
        <div>
          <img
            src={icon}
            alt="weather icon"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Current;
