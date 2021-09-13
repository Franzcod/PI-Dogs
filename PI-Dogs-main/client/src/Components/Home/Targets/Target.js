import React, { useState } from "react";
import style from "./Target.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"; // --rite
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { isFavorite } from "../../../Actions/index";

import loadingImg from "../../../assets/loadingDog_2.gif";

const Target = ({ props }) => {
  // console.log("de target: ", props.id);

  const dispatch = useDispatch();
  const [favoritoIcon, setFavoritoIcon] = useState(false);

  function favoriteado(id) {
    setFavoritoIcon(!favoritoIcon);
    dispatch(isFavorite(id));
  }

  return (
    <div key={props.id} className={style.master}>
      {props.image ? (
        <Link
          key={props.id}
          // className={styles.link}
          to={`/details/${props.id}`}
        >
          <div>
            <img src={props.image} alt="" />
          </div>
        </Link>
      ) : (
        <Link
          key={props.id}
          // className={styles.link}
          to={`/details/${props.id}`}
        >
          <div>
            <img src={loadingImg} alt="" />
          </div>
        </Link>
      )}

      <div className={style.cardDatos}>
        <div className={style.contTitulo}>
          <div className={style.cardNombre}>
            <p>{props.name}</p>
          </div>
          {favoritoIcon ? (
            <MdFavorite
              className={style.iconFav}
              onClick={() => favoriteado(props.id)}
            />
          ) : (
            <MdFavoriteBorder
              className={style.iconFav}
              onClick={() => favoriteado(props.id)}
            />
          )}
        </div>
        <div className={style.datos}>
          <div className={style.pesoAndIcon}>
            <p className={style.cardDato}>
              Weight: <span>{props.weight_min}</span>-{" "}
              <span>{props.weight_max}</span> Kgs{"   "}
            </p>
            {props.userCreate ? (
              <div className={style.tooltip}>
                {/*<FaUserEdit className={style.iconUser} />*/}

                <div className={style.bottom}>
                  <h5>Presionar para eliminar de Base de Datos</h5>
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
