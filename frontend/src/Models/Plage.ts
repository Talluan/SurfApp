export default class Plage {
    id: number;
    nom: string;
    location: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;

    constructor(id: number, nom: string, location: string, latitude: number, longitude: number, description: string, image: string) {
        this.id = id;
        this.nom = nom;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
        this.image = image;
    }

    static fromArray(plages: any): Plage[] {
        return plages.map((plage: any) => new Plage(plage.id, plage.nom, plage.location, plage.latitude, plage.longitude, plage.description, plage.image));
    }
}