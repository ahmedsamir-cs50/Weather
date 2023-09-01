import axios from "axios";
import { useState } from "react";

export const WeatherApiHook = ()=>{
  const [Location,setLocation]=useState("")
  const [data,setData]=useState()
  const HandleChange =(e)=>{
    setLocation(e.target.value)
    console.log(Location)
  }
   const HandlePress =async(e)=>{
   e.preventDefault();
   const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: {city: `${Location}`},
    headers: {
      'X-RapidAPI-Key': '4c7e77638dmsh81c671b308238bbp1dc202jsn9accb09630a3',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setData(response.data)
    setLocation('')
  } catch (error) {
    console.error(error);
  }}
    return[data,HandlePress,HandleChange]
}