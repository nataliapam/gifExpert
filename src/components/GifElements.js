import React from "react";
import PropTypes from "prop-types";
import AdvancedGridList from "./AdvancedGridList";
import { useFetchGifs } from "../hooks/useFetchGifs";
const GifElements = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <AdvancedGridList images={data} />
    </>
  );
};

GifElements.propTypes = {
  category: PropTypes.string,
};

export default GifElements;
