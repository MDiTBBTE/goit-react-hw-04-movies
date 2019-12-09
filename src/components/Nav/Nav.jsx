import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <section className={styles.nav}>
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={{ color: "green" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" exact activeStyle={{ color: "green" }}>
          Movies
        </NavLink>
      </li>
    </ul>
  </section>
);
export default Nav;
