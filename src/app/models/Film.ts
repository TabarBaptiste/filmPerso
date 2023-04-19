export interface Film {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: {id: number, name: string}[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {id: number, logo_path: string | null, name: string, origin_country: string}[];
  production_countries: {iso_3166_1: string, name: string}[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {english_name: string, iso_639_1: string, name: string}[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Actor {
  name: string;
  character: string;
  profile_path: string | null;
}

/*export interface Film {
  release_date: any;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  cast: Actor[];
  revenue: number;
  genres: { id: number, name: string }[];
}

*/