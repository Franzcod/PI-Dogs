import React from "react";
import style from "./About.module.css";
import dog_run from "./banda.gif";

const About = () => {
  return (
    <div className={style.contRey}>
      <div className={style.contAnim}>
        <img src={dog_run} alt=""></img>
      </div>
      <div className={style.pasto}></div>
    </div>
  );
};

export default About;
