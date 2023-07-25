import StarShip from "./StarShip";
import Film from "./Film";

export default class Pilot {
    rawData!: any;
    name: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    homeworld?: string;
    films?: Film[];
    species?: string[];
    vehicles?: string[];
    starships?: StarShip[];
    created?: Date;
    edited?: Date;
    url?: string;

    constructor(rawData: any) {
        this.rawData = rawData;
        this.name = rawData.name as string;
    }
    
    parseAllData(){
        this.height = this.rawData.height as string;
        this.mass = this.rawData.mass as string;
        this.hair_color = this.rawData.hair_color as string;
        this.skin_color = this.rawData.skin_color as string;
        this.eye_color = this.rawData.eye_color as string;
        this.birth_year = this.rawData.birth_year as string;
        this.gender = this.rawData.gender as string;
        this.homeworld = this.rawData.homeworld as string;
        this.films = (this.rawData.films || []).map((filmUrl: string) => ({ url: filmUrl }));
        this.species = this.rawData.species as string[];
        this.vehicles = (this.rawData.vehicles || []).map((vehicleUrl: string) => ({ url: vehicleUrl }));
        this.starships = (this.rawData.starships || []).map((starshipUrl: string) => ({ url: starshipUrl }));
        this.created = new Date(this.rawData.created);
        this.edited = new Date(this.rawData.edited);
        this.url = this.rawData.url as string;
    }
}
