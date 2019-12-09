import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TrendMoviesList.module.css";
import { withRouter } from "react-router-dom";

const TrendMovies = ({ trendList, location, handleQuery }) => (
  <ul className={styles.trend}>
    {trendList.map(list => (
      <li key={list.id}>
        <NavLink
          className={styles.listTrend}
          to={{
            pathname: `/movies/${list.id}`,
            state: { from: location, id: list.id, parsQuery: handleQuery }
          }}
        >
          {list.title} {list.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(TrendMovies);
