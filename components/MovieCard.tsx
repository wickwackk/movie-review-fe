import Link from "next/link";
import { MovieType } from "@/util/types";

type PropType = {
  movie: MovieType;
};

export default function MovieCard({ movie }: PropType) {
  return (
    <Link href={`movie/${movie._id}`}>
      <div className=" p-2 bg-white rounded-xl w-[200px] h-[350px]">
        <picture>
          <img
            className=" rounded-xl w-[200px] h-[250px]"
            src={movie.poster}
            alt={movie.title}
          />
        </picture>
        <p className="flex gap-1">
          <picture>
            {}
            <img className="h-[20px] w-[20px]" src="/metricFresh.svg" alt="" />
          </picture>
          {movie.tomatoes.viewer.meter
            ? `${movie.tomatoes.viewer.meter}%`
            : "no meter"}
        </p>
        <p className="text-sm">{movie.title}</p>
      </div>
    </Link>
  );
}
