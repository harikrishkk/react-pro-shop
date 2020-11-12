import React from "react";
import PropTypes from "prop-types"; // impt
const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {Array(5)
        .fill()
        .map((_, i) => {
          const count = i + 1;
          return (
            <span key={count}>
              <i
                style={{ color: color }}
                className={
                  value >= count
                    ? "fas fa-star"
                    : value >= count - 0.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star"
                }
              ></i>
            </span>
          );
        })}
      <span> {text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
