import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import gengar from "../../assets/icon_dog.png";
// import '../fecha.js'

export default function Titulo() {
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [anio, setAnio] = useState();

  useEffect(() => {
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    let fecha = new Date();
    let hoy = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    setDia(hoy);
    setMes(mes);
    setAnio(anio);
  }, []);

  return (
    <div className={styles.titApp}>
      <h3>Dogcity</h3>
      <img
        // src="https://cdn.pixabay.com/photo/2016/05/20/20/20/weather-1405870_640.png"
        src={gengar}
        alt=""
      />

      <div className={styles.contFecha}>
        <p className="dia">
          {dia + "-"}
          {mes}
        </p>

        <p className="año">{anio}</p>
      </div>
    </div>
  );
}
