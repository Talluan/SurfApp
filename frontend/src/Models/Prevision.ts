import Plage from "./Plage";

export default class Prevision {
    waveHeight: number;
    waveDirection: number;
    wavePeriod: number;
    windWaveHeight: number;
    windWaveDirection: number;
    windWavePeriod: number;
    date: Date;

    constructor( date: Date, waveHeight: number, waveDirection: number, wavePeriod: number, windWaveHeight: number, windWaveDirection: number, windWavePeriod: number) {
        this.date = date;
        this.waveHeight = waveHeight;
        this.waveDirection = waveDirection;
        this.wavePeriod = wavePeriod;
        this.windWaveHeight = windWaveHeight;
        this.windWaveDirection = windWaveDirection;
        this.windWavePeriod = windWavePeriod;
    }

    static fromApiData(data: any): Prevision {
        return new Prevision(
            new Date(data.time),
            data.waveHeightMax,
            data.waveDirectionDominant,
            data.wavePeriodMax,
            data.windWaveHeightMax,
            data.windWaveDirectionDominant,
            data.windWavePeriodMax
        );
    }


}