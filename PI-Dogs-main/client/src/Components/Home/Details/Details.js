/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../../Actions/index";
import loadingImg from "./dog_run.gif";
import { FcWikipedia } from "react-icons/fc";
// import { useHistory } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  let dogData = useSelector((state) => state.dog);

  // const history = useHistory();

  useEffect(() => {
    dispatch(getById(id));
    // console.log(dogData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  return (
    <div className={styles.contRey}>
      {loading ? (
        <div className={styles.caja}>
          <div className={styles.contImg_loading}>
            <img alt="" src={loadingImg} />
          </div>
          <div className={styles.cargandoDiv}>
            <div>Cargando data...</div>
          </div>
        </div>
      ) : (
        <div className={styles.caja}>
          <div className={styles.contImg}>
            <img alt="" src={dogData.image} />
          </div>
          <div className={styles.contInfo}>
            <div className={styles.title}>{dogData.name}</div>

            <div className={styles.medidas}>
              <div className={styles.lifeSpan}>
                <div>
                  Heigth: <span>{dogData.height_min}</span>-
                  <span>{dogData.height_max}</span> cms
                </div>
              </div>
              <div className={styles.lifeSpan}>
                <div>
                  Weight: <span>{dogData.weight_min}</span>-{" "}
                  <span>{dogData.weight_max}</span> Kgs
                </div>
              </div>
            </div>
            <div className={styles.lifeSpan}>
              Life Span: <span> {dogData.life_span}</span>
            </div>
            <div className={styles.temperaments}>
              <div>Temperaments:</div>
              <span> {dogData.temperaments}</span>
            </div>

            <div className={styles.enlace}>
              <a href={`https://es.wikipedia.org/wiki/${dogData.name}`}>
                <i className={styles.icono}>
                  <FcWikipedia />
                </i>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
