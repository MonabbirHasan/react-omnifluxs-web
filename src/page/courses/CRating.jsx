import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import React from "react";

export const CRating = (props) => {
  return (
    <div>
      {props.rating == "1.5" ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : props.rating == "2.5" ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : props.rating == "3.5" ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : props.rating == "4.5" ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
        </>
      ) : props.rating == "5" ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
        </>
      ) : (
        <>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      )}
    </div>
  );
};
