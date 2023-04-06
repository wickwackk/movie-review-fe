import Link from "next/link";
import { MovieType } from "@/util/types";

type PropType = {
  movie: MovieType;
};

export default function MovieCard({ movie }: PropType) {
  return (
    <Link href={`movie/${movie._id}`}>
      <div className=" p-2 bg-white rounded-xl w-[200px] h-[350px] overflow-auto transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl dark:hover:shadow-white/70">
        <picture>
          <img
            className=" rounded-xl w-[200px] h-[250px]"
            src={movie.poster}
            alt={movie.title}
          />
        </picture>
        <p className="flex gap-1 items-center">
          {movie.tomatoes.viewer.meter > 60 ? (
            <picture>
              <img
                className="h-[20px] w-[20px]"
                src="/metricFresh.svg"
                alt=""
              />
            </picture>
          ) : movie.tomatoes.viewer.meter < 60 ? (
            <picture>
              <img
                className="h-[20px] w-[20px]"
                src="/metricRotten.svg"
                alt=""
              />
            </picture>
          ) : (
            <picture>
              <img className="h-[20px] w-[20px]" src="/metricNull.svg" alt="" />
            </picture>
          )}
          {movie.tomatoes.viewer.meter
            ? `${movie.tomatoes.viewer.meter}%`
            : "--"}
        </p>
        <p className="text-sm ">
          {movie.title}
          {`(${movie.year})`}
        </p>
      </div>
    </Link>
  );
}
