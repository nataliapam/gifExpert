import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const AddCategory = (props) => {
  const classes = useStyles();
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
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        id="searchCategory"
        className={classes.input}
        placeholder="Search Gif"
        onChange={handleChange}
        inputProps={{ "aria-label": "search gifs" }}
        value={inputValue}
        variant="outlined"
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

AddCategory.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddCategory;
