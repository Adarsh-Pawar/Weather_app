import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";
// import Fogv from '../assets/videos/fog.mp4'
// import Snowv from '../assets/videos/snowy.mp4'
// import Stormv from '../assets/videos/stormy.mp4'
// import Rainyv from '../assets/videos/rainy.mp4'
// import Clearv from '../assets/videos/clear.mp4'
// import Cloudyv from '../assets/videos/cloudy.mp4'
// import Overcastv from '../assets/videos/overcast.mp4'
import Fog from "../assets/images/fog.jpg";
import Snow from "../assets/images/snow.jpg";
import Storm from "../assets/images/Stormy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Clear from "../assets/images/clear.jpg";
import Cloudy from "../assets/images/Cloudy.jpg";
import Overcast from "../assets/images/overcast.jpg";
import "../index.css";

const BackgroundLayout = ({ onVideoLoaded }) => {
  const Cloudyv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852303/cloudy_jbymaj.mp4";
  const Fogv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852297/fog_rso8n6.mp4";
  const Snowv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852327/snowy_elg5nv.mp4";
  const Stormv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852321/stormy_cmfjip.mp4";
  const Rainyv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852312/rainy_bayosm.mp4";
  const Clearv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705859030/clear_qlecwq.mp4";
  const Overcastv =
    "https://res.cloudinary.com/dlouyhixk/video/upload/v1705852305/overcast_aukwzq.mp4";

  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);
  const [video, setVideo] = useState(Clearv);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("snow")) {
        setVideo(Snowv);
        setImage(Snow);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Storm);
        setVideo(Stormv);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
        setVideo(Fogv);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
        setVideo(Rainyv);
      } else if (imageString.toLowerCase().includes("overcast")) {
        setImage(Overcast);
        setVideo(Overcastv);
      } else if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
        setVideo(Clearv);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
        setVideo(Cloudyv);
      }
    }
  }, [weather]);

  return (
    <>
      <div className="video">
        <img
          src={image}
          alt="weather_image"
          className="h-screen w-full fixed left-0 top-0 -z-[10] img"
        />
        {/* <video className="fixed left-0 top-0 -z-[10] img" src={image} autoPlay loop muted></video> */}
        <video
          className="fixed left-0 top-0 -z-[10] vid"
          src={video}
          autoPlay
          loop
          muted
          onLoadedData={onVideoLoaded}
        ></video>
      </div>
    </>
  );
};

export default BackgroundLayout;
