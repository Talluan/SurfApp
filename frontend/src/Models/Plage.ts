export default class Plage {
    id: number;
    name: string;
    location: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;

    constructor(id: number, name: string, location: string, latitude: number, longitude: number, description: string, image: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
        this.image = image;
    }
}