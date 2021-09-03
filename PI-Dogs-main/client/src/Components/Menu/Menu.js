import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function PageOptions() {
  return (
    <div className={styles.cont}>
      <Link style={{ textDecoration: "none" }} to="/home">
        <p>Home</p>{" "}
      </Link>
      <Link style={{ textDecoration: "none" }} to="/game">
        <p>Game</p>{" "}
      </Link>
      <Link style={{ textDecoration: "none" }} to="/about">
        <p>About</p>{" "}
      </Link>
    </div>
  );
}
