import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState(props.category);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAdd(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="addCategory"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddCategory;
/*<button onClick={() => props.handleAdd(inputValue)}>Add Category</button>*/
