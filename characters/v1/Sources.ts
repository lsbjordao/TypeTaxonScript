import { Source } from "./Source"

export class Sources {
    /**
    * Source.
    */
    sources: Source[]

    constructor() {
        this.sources = []
    }

    public addSource(data: Source) {
        this.sources.push(data)
    }
}