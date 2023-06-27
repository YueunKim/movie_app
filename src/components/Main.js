import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/Main.css";

function Main({ id, coverImage, title, year, summary, genres }) {
  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img src={coverImage} alt={title} />
      </Link>
      <div className="movie__data">
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie__year">year : {year}</p>
        <ul className="movie__genres">
          genres :{" "}
          {genres == null ? "" : genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <p className="movie__summary">
          summary :{" "}
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
      </div>
    </div>
  );
}

Main.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;
