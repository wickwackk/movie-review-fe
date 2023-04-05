import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    axios.get("http://localhost:2080/movie").then((res) => setMovies(res.data));
  }, []);

  return (
    <>
      <p className="h-[50px] p-10 text-2xl text-white">Movies</p>
      <div className="flex flex-wrap gap-10 justify-center">
        {movies &&
          movies.map((movie, index) => <MovieCard key={index} prop={movie} />)}
      </div>
    </>
  );
}
