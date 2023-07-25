import StarShip from "./StarShip";

export default class Film {
    rawData!: any;
    title!: string;
    imgUrl!: string;
    episode_id?: number;
    opening_crawl?: string;
    director?: string;
    producer?: string;
    release_date?: string;
    starships?: StarShip[];
    created?: Date;
    edited?: Date;
    url?: string;

    constructor(rawData: any, imgUrl: string) {
        this.rawData = rawData;
        this.title = rawData.title as string;
        this.imgUrl=imgUrl;
    }

    private parseAllData(rawData: any) {
        this.episode_id = rawData.episode_id as number;
        this.opening_crawl = rawData.opening_crawl as string;
        this.director = rawData.director as string;
        this.producer = rawData.producer as string;
        this.release_date = rawData.release_date as string;
        this.starships = (rawData.starships || []).map((starshipUrl: string) => ({url: starshipUrl}));
        this.created = new Date(rawData.created);
        this.edited = new Date(rawData.edited);
        this.url = rawData.url as string;
    }
}
