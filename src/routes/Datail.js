import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contents from "../components/Contents";
import Navi from "../components/Navi";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      <Navi />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <Contents
            key={movie.id}
            id={movie.id}
            image={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            desc={movie.description_intro}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
