import PropTypes from "prop-types";

function Movie({ coverImage, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{summary}</p>
      <ul>{genres == null ? "" : genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
