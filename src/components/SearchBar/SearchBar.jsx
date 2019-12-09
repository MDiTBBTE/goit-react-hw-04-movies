import React from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const SearchBar = ({ handleInput, handleClick, value }) => (
  <form onSubmit={handleClick}>
    <input type="text" className={styles.input} onChange={handleInput} />
    <Link to={`/movies?query=${value}`} onClick={handleClick}>
      Search
    </Link>
  </form>
);

SearchBar.propTypes = {
  inputValue: propTypes.string,
  onInputChange: propTypes.func
};

export default SearchBar;
