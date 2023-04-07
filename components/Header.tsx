// import "../styles/header.css";

import Link from "next/link";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [val, setVal] = useState<string>();

  function clickHandler(e: React.MouseEvent) {
    setVal((e.target as HTMLButtonElement).value);
    // console.log((e.target as HTMLButtonElement).value);
    // <Link href={`filter/${(e.target as HTMLButtonElement).value}`} />;
  }

  return (
    <div className=" bg-tomato h-28 flex items-center">
      <div className="container mx-12 flex items-center justify-between">
        <div className="w-2/12">
          <picture>
            <img className="w-[180px]" src="./rottenTomato.svg" alt="" />
          </picture>
          {/* <p className="text-4xl font-bold text-white w-10">Rotten Tomatoes</p> */}
        </div>

        <div className="w-5/12">
          <form className="relative">
            <input
              className="border border-white w-full placeholder:text-white rounded-2xl w-4/5 p-1 pl-10 bg-black/40 "
              aria-label="Search"
              type="text"
              name="search"
              placeholder="Search movies, TV, actors, more..."
            />
            <button className="absolute left-3 top-1.5" type="submit">
              <picture>
                <img className="w-[20px]" src="./searchIcon.svg" alt="" />
              </picture>
            </button>
          </form>
        </div>

        <div className="w-4/12 flex gap-x-8 text-white">
          <Link href={`browse/${val && val}`}>
            <button
              onClick={(e: React.MouseEvent) => clickHandler(e)}
              value="MOVIES"
            >
              MOVIES
            </button>
          </Link>

          <Link href={`browse/`}>
            <button>TV SHOWS</button>
          </Link>
          <Link href={`browse/`}>
            <button>MOVIE TRIVIA</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
