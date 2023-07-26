export default class StarShip {
    rawData!: any;
    name!: string;
    model!: string;
    imgURL!: string;
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
    pilots?: string[];
    films?: string[];
    created?: Date;
    edited?: Date;
    url?: string;
    id!: number;

    constructor(rawData: any) {
        this.rawData = rawData;
        this.name = rawData.name as string;
        this.model = rawData.model as string;
        this.id = StarShip.generateID(rawData.url)
        this.imgURL = StarShip.generateImgURL(this.id);
        this.parseAllData();
    }

    static generateID(url: string) {
        const val = "https://swapi.dev/api/starships/".length
        return Number.parseInt(url.substring(val, url.indexOf("/", val)));

    }

    static generateImgURL(id: number) {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    parseAllData() {
        this.manufacturer = this.rawData.manufacturer as string;
        this.crew = this.rawData.crew as string;
        this.starship_class = this.rawData.starship_class as string;
        this.cost_in_credits = this.rawData.cost_in_credits as number;
        this.max_atmosphering_speed = this.rawData.max_atmosphering_speed as number;
        this.passengers = this.rawData.passengers as number;
        this.hyperdrive_rating = this.rawData.hyperdrive_rating as number;
        this.MGLT = this.rawData.MGLT as number;
        this.cargo_capacity = this.rawData.cargo_capacity as number;
        this.films = this.rawData.films;
        this.created = new Date(this.rawData.created);
        this.edited = new Date(this.rawData.edited);
        this.url = this.rawData.url as string;
        this.consumables = this.rawData.consumables as string;
        this.pilots = this.rawData.pilots;
        this.films = this.rawData.films;
        this.length = this.rawData.length;

    }
}
