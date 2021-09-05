import React from "react";
import style from "./Target.module.css";
import { MdFavoriteBorder } from "react-icons/md"; // ---MdFavorite
import { FaUserEdit } from "react-icons/fa";
import loadingImg from "../../../assets/loadingDog_2.gif";
const Target = ({ props }) => {
  // console.log("de target: ", props.id);
  return (
    <div key={props.id} className={style.master}>
      {props.image ? (
        <img src={props.image} alt="" />
      ) : (
        <div>
          <img src={loadingImg} alt="" />
        </div>
      )}

      <div className={style.cardDatos}>
        <div className={style.contTitulo}>
          <div className={style.cardNombre}>
            <p>{props.name}</p>
          </div>
          <MdFavoriteBorder className={style.iconFav} />
        </div>
        <div className={style.datos}>
          <div className={style.pesoAndIcon}>
            <p className={style.cardDato}>
              Weight: <span>{props.weight}</span> Kgs{"   "}
            </p>
            {props.userCreate ? (
              <div className={style.tooltip}>
                <FaUserEdit className={style.iconUser} />
                <div className={style.bottom}>
                  <h5>Creado por usuario</h5>
                </div>
              </div>
            ) : null}
          </div>
          <div className={style.temperamentos}>
            <p> {props.temperaments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
