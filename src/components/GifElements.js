import React from "react";
import PropTypes from "prop-types";
import GifElement from "./GifElement.js";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "33%",
    margin: "auto",
    fontSize: "18px",
    fontWeight: 600,
    paddingLeft: "8px",
  },
}));

const GifElements = ({ category }) => {
  const classes = useStyles();
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <p className={classes.search}>{category}</p>
      {loading && <p className={classes.search}>Loading...</p>}
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
