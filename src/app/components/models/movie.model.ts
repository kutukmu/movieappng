import { FormComment, genre } from "../interfaces/movie.interface";

export class Movie{
    constructor(
        public title:string,
        public overview:string, 
        public id:number,
        public rate:number,
        public release_date:Date,
        public poster_path:string,
        public genres:genre[],
        public comments:FormComment[]
        ){}


}