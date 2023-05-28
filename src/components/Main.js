import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Main({ id, coverImage, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>year : {year}</p>
      <p>
        summary :{" "}
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul>
        genres : {genres == null ? "" : genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
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
