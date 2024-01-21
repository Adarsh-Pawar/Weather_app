import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.gif";
import cloud from "../assets/icons/cloud.gif";
import fog from "../assets/icons/fog.gif";
import rain from "../assets/icons/rain.gif";
import snow from "../assets/icons/snow.gif";
import storm from "../assets/icons/storm.gif";
import wind from "../assets/icons/wind.gif";
import "../index.css";
import { DateTime } from "luxon";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
  timeZone,
}) => {
  const [icon, setIcon] = useState(sun);
  const localDateTime = DateTime.local();
  const specificLocationDate = localDateTime
    .setZone(timeZone)
    .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  const specificLocationTime = localDateTime
    .setZone(timeZone)
    .toLocaleString({
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      } else if (iconString.toLowerCase().includes("overcast")) {
        setIcon(cloud);
      }
    }
  }, [iconString]);
  

  return (
    <div className="w-[22rem] min-w-[22rem] h-[32rem] glassCard p-4 pt-0 mainCard">
      <div className="flex w-full just-center items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{specificLocationDate}</p>
        <p className="flex-1 text-center p-2">{specificLocationTime}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold  shadow rounded-lg" style={{background : "#525FE1"}}>
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg " style={{background : "#03C988"}}>
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};
// bg-blue-600
// bg-green-600

export default WeatherCard;
