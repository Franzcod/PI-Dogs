import React from "react";
import styles from "../Init/Init.module.css";
import { Link } from "react-router-dom";
import img from "../../assets/perro_3.jpg";

export function Init() {
  return (
    <div className={styles.divRey}>
      <div className={styles.contMayor}>
        <h1>Dogcity</h1>
        <p>"Un perro te enseñará lo que es el amor incondicional.</p>
        <p>Si tienes esto en la vida, todo lo demás no será tan malo."</p>
        <Link to={"/home"} className={styles.boton}>
          <h2>INICIAR</h2>
        </Link>
      </div>
      <div className={styles.forma} style={{ backgroundColor: "red" }}></div>
      <div
        className={styles.forma_2}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
}

export default Init;
