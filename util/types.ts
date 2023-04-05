export interface MovieType {
  _id: string;
  plot?: string;
  genres?: string[];
  runtime?: number;
  poster?: string;
  cast?: string[];
  num_mflix_comments?: number;
  title: string;
  fullplot?: string;
  languages: string[];
  countries?: string[];
  released?: Date;
  directors?: string[];
  rated?: string;
  awards?: AwardsType;
  lastupdated?: Date;
  year?: number;
  imdb?: ImdbType;
  type?: string;
  tomatoes?: TomatoesType;
}
