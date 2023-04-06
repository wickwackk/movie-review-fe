import { MovieType } from "@/util/types";
import axios from "axios";
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
