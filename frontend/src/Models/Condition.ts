export class Condition {
    id: number;
    date: string;
    waveHeight: number;
    windSpeed: number;
    windDirection: number;
    temperature: number;
    weather: string;
    beachId: number;
    
    constructor(id: number, date: string, waveHeight: number, windSpeed: number, windDirection: number, temperature: number, weather: string, beachId: number) {
        this.id = id;
        this.date = date;
        this.waveHeight = waveHeight;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
        this.temperature = temperature;
        this.weather = weather;
        this.beachId = beachId;
    }
}