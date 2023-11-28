const SURF_INFO_API = 'https://api.stormglass.io/v2/weather/point?'
const SURF_INFO_API_KEY = 'd7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002'
const params = 'time,windSpeed,waveHeight,airTemperature,waterTemperature,windDirection,windWavePeriod,cloudCover,humidity,precipitation'


const lat = 47.519124;
const lng = -2.856659;
const start = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
const end = new Date(new Date().setHours(23, 59, 59, 999)).toISOString();
const now = new Date().toISOString();

/*     const params = 'time,windSpeed,waveHeight,airTemperature,waterTemperature,windDirection,windWavePeriod';
     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
     headers: {
     'Authorization': 'd7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002'
     }
     }).then((response) => response.json()).then((jsonData) => {
  */
    
//https://erikflowers.github.io/weather-icons/
//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae00

//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae000?token=68114671c02dab5f463d21df3701042410766346ceaa68040f1f4e7f5b0d846b

// https://dashboard.stormglass.io/confirmed
// d7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002
