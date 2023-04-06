import MovieCard from "@/components/MovieCard";

import { MovieType } from "@/util/types";

// interface MovieType {
//   plot: string;
//   genres: string[];
//   runtime: number;
//   poster?: string;
//   cast: string[];
//   num_mflix_comments: number;
//   title: string;
//   fullplot: string;
//   languages: string[];
//   released: Date;
//   directors: string[];
//   rated?: string;
//   awards: AwardsType;
//   lastupdated: string;
//   year: number;
//   imdb: ImdbType;
//   countries: string[];
//   type: string;
//   tomatoes: TomatoesType;
// }

type PropType = {
  movies: MovieType[];
};

export default function Homepage({ movies }: PropType) {
  // const [movies, setMovies] = useState<MovieType[]>();

  // const { movies } = props;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2080/movies")
  //     .then((res) => setMovies(res.data));
  // }, []);

  // console.log(movies);

  return (
    <>
      <p className="h-[50px] p-10 text-2xl text-white">Movies</p>
      <div className="flex flex-wrap gap-10 justify-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
