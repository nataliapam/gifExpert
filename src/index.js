import React from "react";
import { render } from "react-dom";
import "./index.css";
import GifExpertApp from "./GifExpertApp";
import CssBaseline from "@material-ui/core/CssBaseline";

const app = () => (
  <>
    <CssBaseline />
    <GifExpertApp />
  </>
);

render(app(), document.getElementById("root"));
