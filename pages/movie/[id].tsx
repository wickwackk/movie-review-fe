import { MovieType } from "@/util/types";
import axios from "axios";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState<MovieType | null>(null);
  const { query } = useRouter();
  // console.log("Router", query);

  useEffect(() => {
    if (query.id) {
      axios
        .get(`http://localhost:2080/movie/${query.id}`)
        .then((res) => setData(res.data));
    }
  }, [query.id]);

  return (
    <div>
      {/* <p>Id: {query.id}</p> */}
      <div>
        {data && (
          <>
            <h2>{data.title}</h2>
            <picture>
              <img src={data.poster} alt={data.title} />
            </picture>
          </>
        )}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`http://localhost:2080/movies-id`);
  const resJson = await res.json();
  const paths = await resJson.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// export const getStaticProps: GetStaticProps<MovieProps> = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const res = await axios.get(`http://localhost`);
// };
