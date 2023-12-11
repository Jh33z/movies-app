export interface MovieBody {
    original_title(original_title: any): unknown;
    map(arg0: (res: MovieBody) => void): unknown;
    page: number;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
  }
  
  export interface MovieResult {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
  }

  export interface SearchedMovie {
    adult: boolean;
    backdropPath : string;
    genre_ids: [];
    id:number;
    language:string;
    original_title:string;
    overwiew:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number
  }