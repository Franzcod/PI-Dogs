import React from "react";
import style from "./About.module.css";
import dog_run from "./banda.gif";
import dog from "./../../assets/asoma_3.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRedux,
} from "react-icons/si";
// import { RiFileUserLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.contRey}>
      <div className={style.contAnim}>
        <img src={dog_run} alt=""></img>
      </div>
      <div className={style.pasto}></div>
      <div className={style.pasto_2}></div>
      <div className={style.contMayor}>
        <div className={style.caja}>
          <h2>Dogcity App</h2>
          <p className={style.texto_1}>
            Proyecto creado por Francisco Palacios , para el PI de Henry.
          </p>

          <div className={style.texto_2}>
            <a href={`https://www.linkedin.com/in/francisco-palacios1989`}>
              <i>
                <FaLinkedin style={{ marginRight: "30px" }} />
              </i>
            </a>
            <a href={`https://github.com/Franzcod`}>
              <i>
                <FaGithubSquare />
              </i>
            </a>
          </div>
          <div className={style.texto_3}>
            <div className={style.tit}>Tecnologias:</div>
            <div className={style.icons}>
              <SiCss3 />

              <SiJavascript />
              <SiReact />
              <SiPostgresql />
              <SiRedux />
            </div>
          </div>

          <img src={dog} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default About;

// <div className={styles.enlace}>
// <a href={`https://es.wikipedia.org/wiki/${dogData.name}`}>
// <i className={styles.icono}>
//   <FcWikipedia />
// </i>
// </a>
// </div>
