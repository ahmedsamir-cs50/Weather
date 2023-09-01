import axios from "axios";

 export const api = axios.create({baseURL:"http://api.weatherapi.com/v1/current.json?key=d14e716116bf4a34b4b204428231008&q=egypt&aqi=no"})
