import { useState } from "react";

export default function StarRating({ starCount = 5 }) {
  const [startState, setStarState] = useState();
  const [onHover, setOnHover] = useState(0);

  return (
    <div className="start-container">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={
              (onHover == 0 && index < startState) || index < onHover
                ? "star-span"
                : "star"
            }
            onClick={() => setStarState(index + 1)}
            onMouseEnter={() => setOnHover(index + 1)}
            onMouseLeave={() => setOnHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
