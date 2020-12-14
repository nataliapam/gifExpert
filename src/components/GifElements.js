import React from "react";
import PropTypes from "prop-types";
import GifElement from "./GifElement.js";
import { useFetchGifs } from "../hooks/useFetchGifs";
const GifElements = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h4>{category}</h4>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="grid">
        {images.map((img) => (
          <GifElement key={img.id} img={img} />
        ))}
      </div>
    </>
  );
};

GifElements.propTypes = {
  category: PropTypes.string,
};

export default GifElements;
//  <AdvancedGridList images={images} />
