import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import React from "react";

const ClientsRatings = (props) => {
  return (
    <div>
      {props.rating === 1 ? (
        <>
          <span>
            <Star />
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
          <span>
            <StarBorder />
          </span>
        </>
      ) : props.rating === "1.5" ? (
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
      ) : props.rating === 2 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
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
      ) : props.rating === 2.5 ? (
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
      ) : props.rating === 3 ? (
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
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : props.rating === 3.5 ? (
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
      ) : props.rating === 4 ? (
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
            <StarBorder />
          </span>
        </>
      ) : props.rating === 4.5 ? (
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
      ) : props.rating === 5 ? (
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
            <StarBorder />
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
          <span>
            <StarBorder />
          </span>
        </>
      )}
    </div>
  );
};

export default ClientsRatings;
