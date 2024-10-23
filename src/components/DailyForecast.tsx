import React, { useEffect, useState } from "react";
import { Day, Forecast } from "../constans/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const DailyForecast: React.FC<Forecast> = ({ forecastday }) => {
  const [currentDay, setCurrentDay] = useState<string | null>(null);

  useEffect(() => {
    const updateDay = () => {
      const currentDay = new Date().toLocaleString("en-US", {
        weekday: "short",
      });
      setCurrentDay(currentDay);
    };

    // Update day on mount
    updateDay();
  }, []);

  return (
    <section className={`p-2 md:p-3 bg-sky-400 bg-opacity-30 rounded-lg`}>
      <header className="flex items-center gap-2 text-white border-b pb-2">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>{forecastday.length}</span>
        <span>Day's Forecast</span>
      </header>
      <div>
        {forecastday &&
          forecastday.map(
            (day: { day?: Day; date?: string }, index: number) => {
              const { date } = day;
              const {
                mintemp_c = 0, // Default values to avoid undefined
                maxtemp_c = 0,
                avgtemp_c = 0,
                condition = { icon: "", text: "Unknown" },
              } = day?.day || {};

              const today = date
                ? new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })
                : "Unknown"; // Fallback if date is undefined

              // Avoid division by zero in the temperature bar width
              const tempRange = maxtemp_c - mintemp_c || 1;
              const tempPercentage =
                ((avgtemp_c - mintemp_c) / tempRange) * 100;

              return (
                <article
                  key={index}
                  className={`flex items-center justify-between gap-2 text-white py-2 ${
                    index < forecastday.length -1? "border-b" : ""
                  }`}
                >
                  <span>{currentDay === today ? "Today" : today}</span>

                  {condition.icon && (
                    <div className="size-8">
                      <img
                        src={condition.icon}
                        alt={condition.text || "Weather condition"}
                        className="w-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-x-2">
                    <span>{Math.round(mintemp_c)}°</span>
                    <div className="h-1 w-14 bg-black bg-opacity-20 rounded-full relative overflow-hidden">
                      <div
                        style={{
                          width: `${tempPercentage}%`,
                        }}
                        className="h-full bg-gradient-to-r from-yellow-500 to-red-500"
                      />
                    </div>
                    <span>{Math.round(maxtemp_c)}°</span>
                  </div>
                </article>
              );
            }
          )}
      </div>
    </section>
  );
};

export default DailyForecast;
