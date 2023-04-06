// import "../styles/header.css";

import Link from "next/link";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [val, setVal] = useState<string>();

  function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setVal((e.target as HTMLButtonElement).value);
    // console.log((e.target as HTMLButtonElement).value);
    // <Link href={`filter/${(e.target as HTMLButtonElement).value}`} />;
  }

  return (
    <div className=" bg-tomato h-28 flex items-center">
      <div className="container mx-12 flex items-center justify-between">
        <div className="w-1/3">
          <p className="text-4xl font-bold text-white w-10">Rotten Tomatoes</p>
        </div>

        <div className="w-1/3">
          <form>
            <input
              className="rounded-xl w-4/5 p-1"
              aria-label="Search"
              type="text"
              name="search"
              placeholder="Search movies, TV, actors, more"
            />
            <button className="bg-white" type="submit">
              s
            </button>
          </form>
        </div>

        <div className="w-1/3 flex gap-x-8 text-white">
          <Link href={`filter/${val && val}`}>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                clickHandler(e)
              }
              value="MOVIES"
            >
              MOVIES
            </button>
          </Link>

          <Link href={`filter/`}>
            <button>TV SHOWS</button>
          </Link>
          <Link href={`filter/`}>
            <button>MOVIE TRIVIA</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
