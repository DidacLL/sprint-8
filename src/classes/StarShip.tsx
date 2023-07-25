import Pilot from "./Pilot";
import Film from "./Film";

export default class StarShip {
    rawData!: any;
    name!: string;
    model!: string;
    imgUrl!: string;
    manufacturer?: string;
    cost_in_credits?: number;
    length?: number;
    max_atmosphering_speed?: number;
    crew?: string;
    passengers?: number;
    cargo_capacity?: number;
    consumables?: string;
    hyperdrive_rating?: number;
    MGLT?: number;
    starship_class?: string;
    pilots?: Pilot[];
    films?: Film[];
    created?: Date;
    edited?: Date;
    url?: string;
    id!: number;

    constructor(rawData: any,imgURL: string) {
        this.rawData = rawData;
        this.name = rawData.name as string;
        this.model = rawData.model as string;
        this.imgUrl=imgURL;
        this.id=StarShip.generateID(rawData.url)
    }

    parseAllData(){
        this.manufacturer = this.rawData.manufacturer as string;
        this.crew = this.rawData.crew as string;
        this.starship_class = this.rawData.starships as string;
        this.cost_in_credits = this.rawData.cost_in_credits as number;
        this.max_atmosphering_speed = this.rawData.max_atmosphering_speed as number;
        this.passengers = this.rawData.passengers as number;
        this.hyperdrive_rating = this.rawData.hyperdrive_rating as number;
        this.MGLT = this.rawData.MGLT as number;
        this.cargo_capacity = this.rawData.cargo_capacity as number;
        this.films = (this.rawData.films || []).map((filmUrl: string) => ({ url: filmUrl }));
        this.created = new Date(this.rawData.created);
        this.edited = new Date(this.rawData.edited);
        this.url = this.rawData.url as string;
        this.consumables = this.rawData.consumables as string;
    }
    static  generateID(url:string){
       return Number.parseInt(url.substring(url.length-2,url.length-1));

    }
}
