import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import Fogv from '../assets/videos/fog.mp4'
import Snowv from '../assets/videos/snowy.mp4'
import Stormv from '../assets/videos/stormy.mp4'
import Rainyv from '../assets/videos/rainy.mp4'
import Clearv from '../assets/videos/clear.mp4'
import Cloudyv from '../assets/videos/cloudy.mp4'
import Overcastv from '../assets/videos/overcast.mp4'
import Fog from '../assets/images/fog.jpg'
import Snow from '../assets/images/snow.jpg'
import Storm from '../assets/images/Stormy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Clear from '../assets/images/Clear.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Overcast from '../assets/images/overcast.jpg'
import "../index.css";

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)
  const [video, setVideo] = useState(Clearv)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
        setVideo(Clearv);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
        setVideo(Fogv);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
        setVideo(Cloudyv);
      }  else if (imageString.toLowerCase().includes('snow')) {
        setVideo(Snowv);
        setImage(Snow);
      }  else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Storm);
        setVideo(Stormv);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
        setVideo(Rainyv);
      } else if(imageString.toLowerCase().includes('overcast')){
        setImage(Overcast);
        setVideo(Overcastv);
      }
    }
  }, [weather])

  return (
    <>
    <div className="video">
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10] img' />
    <video className="fixed left-0 top-0 -z-[10] vid" src={video} autoPlay loop muted></video>
    </div>
    </>
  )
}

export default BackgroundLayout