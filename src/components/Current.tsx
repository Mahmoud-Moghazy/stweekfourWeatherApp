import React from "react";
import { WeatherData } from "../constans/interfaces";

const Current: React.FC<WeatherData> = ({ current, location }) => {

  return (
    <section className="text-white p-5 text-center drop-shadow-lg">
      <h2 className="text-2xl mb-3 drop-shadow-xl">
        {location.name}, {location.region}, {location.country}
      </h2>
      <span className="drop-shadow-lg">
        {new Date(location.localtime).toLocaleString("en-US", {
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
            <span className="text-8xl drop-shadow-lg">{Math.round(current.temp_c)}°</span>
            <span>{current.condition.text}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>°C</span>
            <span>L : {Math.round(current.dewpoint_c)}</span>
            <span>H : {Math.round(current.heatindex_c)}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>°F</span>
            <span>L : {Math.round(current.dewpoint_f)}</span>
            <span>H : {Math.round(current.heatindex_f)}</span>
          </div>
        </div>
        <div>
          <img src={current.condition.icon} alt={current.condition.text} className="w-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
};

export default Current;
