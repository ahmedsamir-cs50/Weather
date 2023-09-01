const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
  params: {
    aggregateHours: '24',
    location: 'Cairo',
    contentType: 'csv',
    unitGroup: 'us',
    shortColumnNames: '0'
  },
  headers: {
    'X-RapidAPI-Key': '276a550533msh2c0577abac7d6ebp184f0cjsn8917f908c10d',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
// 
// const options = {
//     method: 'GET',
//     url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//     params: {city: `${Location}`},
//     headers: {
//       'X-RapidAPI-Key': '4c7e77638dmsh81c671b308238bbp1dc202jsn9accb09630a3',
//       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     setData(response.data)
//   } catch (error) {
//     console.error(error);
//   }