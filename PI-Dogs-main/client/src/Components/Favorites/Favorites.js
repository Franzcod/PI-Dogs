/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Favorites.module.css";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loadingImg from "../../assets/loadingDog.gif";
// import { MdDeleteForever } from "react-icons/md";
import TargetFav from "../Home/Targets/TargetFav";

import { get_Favorites } from "../../Actions/index";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Home = () => {
  //me traigo el estado de mi action con useSelector
  const dispatch = useDispatch();
  // const dispatch2 = useDispatch();

  const [loading, setLoading] = useState(true);

  const [paginado, setPaginado] = useState([0, 7]);

  let favoritesDogs = useSelector((state) => state.favorites);

  // function act() {
  //   setLoading(true);
  //   setPaginado([0, 7]);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }

  function handlerClick(e) {
    if (e === "right") {
      let num_1 = paginado[0] + 8;
      let num_2 = paginado[1] + 8;
      setPaginado([num_1, num_2]);
    } else {
      let num_1 = paginado[0] - 8;
      let num_2 = paginado[1] - 8;
      if (num_1 < 0) {
        num_1 = 0;
        num_2 = 7;
      }
      setPaginado([num_1, num_2]);
    }
  }

  useEffect(() => {
    dispatch(get_Favorites());

    //para q se vea el gif de loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.divRey}>
      <div className={styles.contInputs}></div>
      <div className={styles.contFiltros}>
        {paginado[0] === 0 ? (
          <IoIosArrowDropleft
            className={styles.arowButton}
            style={{ color: "transparent" }}
            onClick={() => handlerClick("left")}
          />
        ) : (
          <IoIosArrowDropleft
            className={styles.arowButton}
            onClick={() => handlerClick("left")}
          />
        )}

        {paginado[1] > favoritesDogs.length ? (
          <IoIosArrowDropright
            key={1}
            className={styles.arowButton}
            style={{ color: "transparent" }}
            onClick={() => handlerClick("right")}
          />
        ) : (
          <IoIosArrowDropright
            className={styles.arowButton}
            onClick={() => handlerClick("right")}
          />
        )}
      </div>

      <div className={styles.contRey}>
        {loading ? (
          <div className={styles.loadingCont}>
            <img src={loadingImg} alt="" />
          </div>
        ) : favoritesDogs.length ? (
          favoritesDogs.map((el, index) =>
            index >= paginado[0] && index <= paginado[1] && el.id ? (
              el.userCreate === true ? (
                <div key={el.id}>
                  <TargetFav props={el} key={el.id} />
                </div>
              ) : (
                <TargetFav props={el} key={el.id} />
              )
            ) : null
          )
        ) : (
          <h2>"No hay favoritos "</h2>
        )}
      </div>

      <div className={styles.contFiltros}>
        {paginado[0] === 0 ? (
          <IoIosArrowDropleft
            className={styles.arowButton}
            style={{ color: "transparent" }}
            onClick={() => handlerClick("left")}
          />
        ) : (
          <IoIosArrowDropleft
            className={styles.arowButton}
            onClick={() => handlerClick("left")}
          />
        )}

        {paginado[1] >= favoritesDogs.length ? (
          <IoIosArrowDropright
            className={styles.arowButton}
            style={{ color: "transparent" }}
            onClick={() => handlerClick("right")}
          />
        ) : (
          <IoIosArrowDropright
            className={styles.arowButton}
            onClick={() => handlerClick("right")}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
