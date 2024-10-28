import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import { format, parseISO } from "date-fns"; // Import date-fns functions
import { Hour } from "../constans/interfaces";

interface HourlyForecastProps {
  hour: Array<Hour>;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hour }) => {
  const [timeNow, setTimeNow] = useState<string | null>(null);
  const nowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = format(new Date(), "h aaa"); // Format current time in 12-hour format with AM/PM
      setTimeNow(currentTime);
    };

    // Update time on mount and every hour
    updateTime();
    const interval = setInterval(updateTime, 60 * 60 * 1000); // Update every hour

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (nowRef.current) {
      nowRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }, [timeNow]);

  return (
    <section className={`p-2 md:p-3 bg-sky-400 bg-opacity-30 rounded-lg`}>
      <header className="flex items-center gap-2 text-white border-b pb-2">
        <FontAwesomeIcon icon={faClock} />
        <span>Hourly Forecast</span>
      </header>
      <div className="flex overflow-x-scroll gap-2 my-3 hide-scrollbar">
        {hour.length > 0 ? (
          hour.map((h) => {
            const forecastHour = format(parseISO(h.time), "h aaa"); // Parse and format h.time to 12-hour format with AM/PM
            const isCurrentHour = timeNow === forecastHour;
            return (
              <div
                key={h.time}
                ref={isCurrentHour ? nowRef : null}
                className={`flex flex-col items-center text-white shrink-0 bg-sky-400 bg-opacity-35 p-2 rounded`}
              >
                <p>{isCurrentHour ? "Now" : forecastHour}</p>
                <div className="size-16">
                  <img
                    src={h.condition.icon}
                    alt={h.condition.text}
                    className="w-full object-cover object-center"
                  />
                </div>
                <span>{Math.round(h.temp_c)} &#x2103;</span>
                <span>{Math.round(h.temp_f)} &#x2109;</span>
              </div>
            );
          })
        ) : (
          <p>No data available</p> // Handling empty hour data
        )}
      </div>
    </section>
  );
};

export default HourlyForecast;
