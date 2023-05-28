import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Contents({ id, image, title, year, rating, runtime, desc }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>year : {year}</p>
      <p>rate : {rating}</p>
      <p>runtime : {runtime}</p>
      <p>description : {desc}</p>
    </div>
  );
}

Contents.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Contents;
