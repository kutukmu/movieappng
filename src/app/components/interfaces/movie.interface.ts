export interface Result {
    [key:string]:Movie
}

export interface Movie {
    original_title:    string;
    poster_path:       string;
    video:             boolean;
    rate:      number;
    title:             string;
    id:                number;
    release_date:      Date;
    vote_count:        number;
    overview:          string;
    popularity:        number;
    genres:           genre[];
    genre_ids:        number[],
    comments:          FormComment[],
    likeCount:         number
}

export interface IComment{
    id:number,
    content:FormComment
}

export interface FormComment{
    name:string,
    comment:string
}

export interface genre{
    id:number,
    name:string

}


export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    It = "it",
    Ko = "ko",
}
