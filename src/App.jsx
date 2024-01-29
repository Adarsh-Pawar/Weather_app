import { useState } from "react";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardSkeleton from "./Components/CardSkeleton";
import MiniCardSkeleton from "./Components/MiniCardSkeleton";
import Clear from "./assets/images/clear.jpg";

function App() {
  const [input, setInput] = useState("");
  const [isVideoLoading,setIsVideoLoading] = useState(true)
  const {
    weather,
    thisLocation,
    values,
    place,
    setPlace,
    timeZone,
    isLoading,
  } = useStateContext();

  const submitCity = () => {
    if (input === "") return;
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <div className="header w-full h-screen text-white px-8">
        <nav className="w-full p-3 flex justify-between items-center">
          <h1 className="title font-bold tracking-wide text-3xl p-3">
            Weather App
          </h1>
          <div className="search w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
            <img
              src={search}
              alt="search"
              className="w-[1.5rem] h-[1.5rem]"
              onClick={submitCity}
              style={{ cursor: "pointer" }}
            />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitCity();
                }
              }}
              type="text"
              placeholder="Search city"
              className="searchInput w-full text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </nav>
        <ToastContainer />

        {/* If Not Loaded */}
        {(isLoading || isVideoLoading) && (
          <div>
            {/* <div className="video">
              <img
                src={Clear}
                alt="weather_image"
                className="h-screen w-full fixed left-0 top-0 -z-[10] img"
              />
            </div> */}
            <BackgroundLayout onVideoLoaded={() => setIsVideoLoading(false)}></BackgroundLayout>
            <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] mt-3 items-center justify-center main">
              <CardSkeleton></CardSkeleton>
              <div className="minicard flex justify-center gap-8 flex-wrap w-[60%]">
                {Array.from({ length: 7 }).map((_, index) => (
                  <MiniCardSkeleton key={index}></MiniCardSkeleton>
                ))}
              </div>
            </main>
          </div>
        )}

        {/* If Loaded */}
        {(!isLoading && !isVideoLoading) && (
          <div>
            <BackgroundLayout onVideoLoaded={() => setIsVideoLoading(false)}></BackgroundLayout>
            <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] mt-3 items-center justify-center main">
              <WeatherCard
                place={thisLocation}
                windspeed={weather.wspd}
                humidity={weather.humidity}
                temperature={weather.temp}
                heatIndex={weather.heatindex}
                iconString={weather.conditions}
                conditions={weather.conditions}
                timeZone={timeZone}
              />

              <div className="minicard flex justify-center gap-8 flex-wrap w-[60%]">
                {values?.slice(1, 7).map((curr) => {
                  return (
                    <MiniCard
                      key={curr.datetime}
                      time={curr.datetime}
                      temp={curr.temp}
                      iconString={curr.conditions}
                    />
                  );
                })}
              </div>
            </main>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
