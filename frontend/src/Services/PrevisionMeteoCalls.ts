import { fetchWeatherApi, WeatherApiResponse } from "openmeteo";
import Plage from "../Models/Plage";

const urlMarine = "https://marine-api.open-meteo.com/v1/marine";

const urlWeather = "https://api.open-meteo.com/v1/forecast";

const getWeather = async (plage: Plage) => {
    const params = {
        "latitude": plage.latitude,
        "longitude": plage.longitude,
        "current": ["temperature_2m", "precipitation", "weather_code", "wind_speed_10m"]
    }
    const url = "https://api.open-meteo.com/v1/forecast";

    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            precipitation: current.variables(1)!.value(),
            weatherCode: current.variables(2)!.value(),
            windSpeed10m: current.variables(3)!.value(),
        },

    };

    return weatherData;
}

const getMarine = async (plage: Plage) => {
    const params = {
        "latitude": plage.latitude,
        "longitude": plage.longitude,
        "daily": ["wave_height_max", "wave_direction_dominant", "wave_period_max", "wind_wave_height_max", "wind_wave_direction_dominant", "wind_wave_period_max"],
        "forecast_days": 1
    }
    const responses = await fetchWeatherApi(urlMarine, params);
    const response = responses[0];
    const daily = response.daily()!;


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


    return weatherData;
}

export { getWeather, getMarine };   