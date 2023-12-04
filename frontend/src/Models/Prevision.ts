import Plage from "./Plage";

export default class Prevision {
    id: number;
    date: Date;
    plage: Plage;
    temperature: number;
    vent: number;
    humidite: number;
    pluie: number;
    uv: number;
    constructor(id: number, date: Date, plage: Plage, temperature: number, vent: number, humidite: number, pluie: number, uv: number) {
        this.id = id;
        this.date = date;
        this.plage = plage;
        this.temperature = temperature;
        this.vent = vent;
        this.humidite = humidite;
        this.pluie = pluie;
        this.uv = uv;
    }
}