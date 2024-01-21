import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

const API_KEY = import.meta.env.VITE_API_KEY;
const StateContext = createContext()
var flag = true;
export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Ahmedabad')
    const [thisLocation, setLocation] = useState('')
    const [timeZone, setTimeZone] = useState('Asia/Kolkata')

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
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
            
        }

        try {
            const response = await axios.request(options);
            // console.log(response.data)
            const thisData = Object.values(response.data.locations)[0]
            setTimeZone(thisData.tz)
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

            flag = true;
        } catch (e) {
            //if error
            // console.error(e);
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

                flag = false;
        }

        if(flag == true){
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
            timeZone
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)