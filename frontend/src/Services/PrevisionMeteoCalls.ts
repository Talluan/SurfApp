import { fetchWeatherApi, WeatherApiResponse } from "openmeteo";
import Plage from "../Models/Plage";

const urlMarine = "https://marine-api.open-meteo.com/v1/marine";

const urlWeather = "https://weather-api.open-meteo.com/v1/forecast";

const getWeather = async (plage: Plage) => {
    const params = {
        "latitude": plage.latitude,
        "longitude": plage.longitude,
        "forecast_days": 1
    }
    const responses = await fetchWeatherApi(urlWeather, params);
    const response = responses[0];
    const daily = response.daily()!;
    console.log(daily);


    const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    // Note: The order of weather variables in the URL query and the indices below need to match!

    return daily;
}

const getMarine = async (plage: Plage) => {
    const params = {
        "latitude": 43.4806,
        "longitude": -1.5568,
        "daily": ["wave_height_max", "wave_direction_dominant", "wave_period_max", "wind_wave_height_max", "wind_wave_direction_dominant", "wind_wave_period_max"],
        "forecast_days": 1
    }
    const responses = await fetchWeatherApi(urlMarine, params);
    const response = responses[0];
    const daily = response.daily()!;

    console.log("ouaisouais")

    const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {

        daily: {
            time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            waveHeightMax: daily.variables(0)!.valuesArray()!,
            waveDirectionDominant: daily.variables(1)!.valuesArray()!,
            wavePeriodMax: daily.variables(2)!.valuesArray()!,
        windWaveHeightMax: daily.variables(3)!.valuesArray()!,
            windWaveDirectionDominant: daily.variables(4)!.valuesArray()!,
            windWavePeriodMax: daily.variables(5)!.valuesArray()!,
        },

    };
    console.log(weatherData);


    return weatherData;
}

export { getWeather, getMarine };   