import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'
import { toast } from "react-toastify";


const API_KEYS = [import.meta.env.VITE_API_KEY_1, import.meta.env.VITE_API_KEY_2, import.meta.env.VITE_API_KEY_3];

const StateContext = createContext();
let flag =true;
export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Ahmedabad')
    const [lastValidPlace, setLastValidPlace] = useState('Ahmedabad')
    const [thisLocation, setLocation] = useState('')
    const [timeZone, setTimeZone] = useState('Asia/Kolkata')
    const [isLoading, setIsLoading] = useState(true)
    const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0)

    // fetch api
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': API_KEYS[currentApiKeyIndex],
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
            
        }

        try {
            const response = await axios.request(options);
            const thisData = Object.values(response.data.locations)[0]
            setTimeZone(thisData.tz)
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
            flag=true;
            setIsLoading(false);
        } catch (error) {

            if(error.response && error.response.status === 429)
            {
                setCurrentApiKeyIndex((currentApiKeyIndex + 1) % API_KEYS.length);
                fetchWeather();
            }
            else{
                toast.error('This place (' +place+ ') does not exist', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"colored",
                    });
                    flag=false;
                    setIsLoading(true);
                    setPlace(lastValidPlace);
            }
            
        }

        if(flag){
            setLastValidPlace(place);
            toast.success('Showing weather of '+place, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored",
                });
        }

    }

    useEffect(() => {
        fetchWeather()
    }, [place])

    // useEffect(() => {
    //     console.log(values)
    // }, [values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            timeZone,
            isLoading
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)