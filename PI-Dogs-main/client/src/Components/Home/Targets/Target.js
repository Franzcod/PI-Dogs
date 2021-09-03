import React from "react";
import style from "./Target.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import loadingImg from "../../../assets/loadingDog_2.gif";
const Target = ({ props }) => {
  // console.log(props);
  return (
    <div className={style.master}>
      {props.image ? (
        <img src={props.image} alt="" />
      ) : (
        <div>
          <img src={loadingImg} alt="" />
        </div>
      )}

      <div className={style.cardDatos}>
        <div className={style.contTitulo}>
          <p className={style.cardNombre}>{props.name}</p>
          <MdFavoriteBorder className={style.iconFav} />
        </div>
        <div className={style.pesoYalto}>
          <p className={style.cardDato}>
            Weight: <span>{props.weight}</span> Kgs
          </p>
          <p className={style.cardDato}> {props.temperaments}</p>
        </div>
      </div>
    </div>
  );
};

export default Target;
