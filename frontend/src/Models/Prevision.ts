import Plage from "./Plage";

export default class Prevision {
    waveHeight: number;
    waveDirection: number;
    wavePeriod: number;
    precipitation: number;
    temperature: number;
    weatherCode: number;
    windSpeed: number;
    date: Date;

    constructor( date: Date, waveHeight: number, waveDirection: number, wavePeriod: number, precipitation: number, temperature: number, weatherCode: number, windSpeed: number) {
        this.date = date;
        this.waveHeight = waveHeight;
        this.waveDirection = waveDirection;
        this.wavePeriod = wavePeriod;
        this.precipitation = precipitation;
        this.temperature = temperature;
        this.weatherCode = weatherCode;
        this.windSpeed = windSpeed;
    }

    static fromApiData(data: any): Prevision {
        return new Prevision(
            new Date(data.time),
            data.waveHeightMax,
            data.waveDirectionDominant,
            data.wavePeriodMax,
            data.precipitation,
            data.temperature2m,
            data.weatherCode,
            data.windSpeed10m
        );
    }


}