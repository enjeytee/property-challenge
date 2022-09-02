import { Review } from "./interfaces.js";
export class MainProperty {
    source: string;
    title: string;
    reviews: Review[];
    constructor(source: string, title: string, reviews: Review[]) {
        this.source = source;
        this.title = title;
        this.reviews = reviews;
    };
};