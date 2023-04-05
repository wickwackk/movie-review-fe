import Link from "next/link";

type AwardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type ImdbType = {
  rating: number;
  votes: number;
  id: number;
};
type ViewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type TomatoesType = { viewer: ViewerType; lastUpdated: Date };

interface MovieType {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: AwardsType;
  lastupdated: string;
  year: number;
  imdb: ImdbType;
  countries: string[];
  type: string;
  tomatoes: TomatoesType;
}

type PropType = {
  prop: MovieType;
};

export default function MovieCard({ prop }: PropType) {
  return (
    <Link href={prop.id}>
      <div className=" w-[200px] h-[300px]">
        <picture>
          <img
            className=" w-[200px] h-[250px]"
            src={prop.poster}
            alt={prop.title}
          />
        </picture>
        <p>{prop.title}</p>
      </div>
    </Link>
  );
}
