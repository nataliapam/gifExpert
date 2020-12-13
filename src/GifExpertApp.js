import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifElements from "./components/GifElements";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["Chinchilla"]);

  const handleSubmit = (value) => {
    if (value.length > 2) {
      //setCategories([...categories, value]);
      setCategories([value]);
    }
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory handleAdd={handleSubmit} category={categories} />

      <ol>
        {categories.map((el) => {
          return <GifElements key={el} category={el} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
