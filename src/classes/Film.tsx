export default class Film {
    rawData!: any;
    id!: number;
    title: string;
    episode_id?: string;
    opening_crawl?: string;
    director?: string;
    producer?: string;
    release_date?: string;
    characters?: string[];
    imgURL!: string;
    starships?: string[];

    constructor(rawData: any) {
        this.rawData = rawData;
        this.id = Film.generateID(this.rawData.url);
        this.title = this.rawData.title as string;
        this.episode_id = rawData.episode_id as string;
        this.opening_crawl = rawData.opening_crawl;
        this.director = rawData.director;
        this.producer = rawData.producer;
        this.release_date = rawData.release_date;
        this.characters = rawData.characters;
        this.imgURL = Film.generateImgURL(this.id);
        this.starships = rawData.starships;

    }

    static generateImgURL(id: number) {
        return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
    }

    static generateID(url: string) {
        const val = "https://swapi.dev/api/films/".length
        return Number.parseInt(url.substring(val, url.indexOf("/", val)));

    }
}
