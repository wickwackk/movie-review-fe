// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

import LayoutComp from "@/components/LayoutComp";
import { MovieType } from "@/util/types";
import axios from "axios";
import Homepage from "../components/Homepage";

export default function Home(props: { movies: MovieType[] }) {
  const { movies } = props;
  return (
    <div className="main">
      <LayoutComp>
        <Homepage movies={movies} />
      </LayoutComp>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2080/movies");
  const movies = await res.data;
  // console.log("movies", movies);
  return {
    props: {
      movies: movies,
    },
  };
}
