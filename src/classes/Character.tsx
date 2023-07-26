export default class Character {
    rawData!: any;
    name: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    films?: string[];
    starships?: string[];
    created?: Date;
    edited?: Date;
    url: string;
    imgURL: string;
    id: number;

    constructor(rawData: any) {
        this.rawData = rawData;
        this.url = this.rawData.url as string;
        this.id = Character.generateID(this.url);
        this.name = rawData.name as string;
        this.imgURL = Character.generateImgURL(this.id);
        this.parseAllData()

    }

    static generateImgURL(id: number) {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    }

    static generateID(url: string) {
        const val = "https://swapi.dev/api/people/".length
        return Number.parseInt(url.substring(val, url.indexOf("/", val)));

    }

    parseAllData() {
        this.height = this.rawData.height as string;
        this.mass = this.rawData.mass as string;
        this.hair_color = this.rawData.hair_color as string;
        this.skin_color = this.rawData.skin_color as string;
        this.eye_color = this.rawData.eye_color as string;
        this.birth_year = this.rawData.birth_year as string;
        this.gender = this.rawData.gender as string;
        this.films = this.rawData.films as string[];
        this.starships = this.rawData.starships as string[];
        this.created = new Date(this.rawData.created);
        this.edited = new Date(this.rawData.edited);
    }
}
