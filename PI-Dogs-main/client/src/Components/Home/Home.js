/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import loadingImg from "../../assets/loadingDog.gif";

import Target from "./Targets/Target";

import {
  getDogs,
  getDogsCreateByUser,
  getTemperaments,
  getDogsForApi,
  getDogsForTemperament,
  getByBreed,
} from "../../Actions/index";

import {
  IoIosArrowDropright,
  IoIosArrowDropleft,
  IoMdCheckbox,
} from "react-icons/io";

const Home = () => {
  //me traigo el estado de mi action con useSelector
  const dispatch = useDispatch();
  // const dispatch2 = useDispatch();

  const [loading, setLoading] = useState(true);

  const [paginado, setPaginado] = useState([0, 7]);

  let alldogs = useSelector((state) => state.dogs);

  const allTemperaments = useSelector((state) => state.temperaments);

  function act() {
    setLoading(true);
    setPaginado([0, 7]);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

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

  function handleOrder(e) {
    switch (e.target.value) {
      case "DESC":
        alldogs = alldogs.sort((b, a) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        act();
        break;
      case "ASC":
        alldogs = alldogs.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        act();
        break;
      case "weight_min":
        alldogs = alldogs.sort((a, b) => {
          if (Number(a.weight.split(" ")[0]) > Number(b.weight.split(" ")[0]))
            return 1;
          if (Number(a.weight.split(" ")[0]) < Number(b.weight.split(" ")[0]))
            return -1;
          return 0;
        });
        act();
        break;
      case "weight_max":
        alldogs = alldogs.sort((b, a) => {
          if (Number(a.weight.split(" ")[0]) > Number(b.weight.split(" ")[0]))
            return 1;
          if (Number(a.weight.split(" ")[0]) < Number(b.weight.split(" ")[0]))
            return -1;
          return 0;
        });
        act();
        break;
      case "All":
        dispatch(getDogs());
        act();
        break;
      case "true":
        dispatch(getDogsCreateByUser());
        act();
        break;

      case "false":
        dispatch(getDogsForApi());
        act();
        break;
      default:
        break;
    }
  }

  function handleTemperament(e) {
    console.log(e.target.value);
    dispatch(getDogsForTemperament(e.target.value));
  }

  function searchByInput(e) {
    dispatch(getByBreed(e));
  }

  function submiteado() {
    let el = document.getElementById("input_1");

    searchByInput(el.value);
  }

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());

    //para q se vea el gif de loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className={styles.divRey}>
      <div className={styles.contInputs}>
        <div className={styles.divBuscador}>
          <input
            id="input_1"
            type="text"
            // name="search"
            placeholder="Search by breed"
            className={styles.input}
            // onChange={(e) => setNumeroDePokemon(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchByInput(e.target.value);
                // console.log(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <IoMdCheckbox
            className={styles.iconEnter}
            onClick={() => {
              submiteado();
            }}
          />
        </div>
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

        <select onChange={(e) => handleOrder(e)}>
          <option value="All">All</option>
          <option value="false">Real</option>
          <option value="true">Created</option>
        </select>

        <select onChange={(e) => handleOrder(e)}>
          <option value="x">Order...</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
          <option value="weight_min">Weight min</option>
          <option value="weight_max">Weight max</option>
        </select>

        <select
          onChange={(e) => {
            handleTemperament(e);
          }}
        >
          {allTemperaments &&
            allTemperaments.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
        </select>

        {paginado[1] > alldogs.length ? (
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
        ) : (
          alldogs.map((el, index) =>
            index >= paginado[0] && index <= paginado[1] && el.id ? (
              <Target props={el} key={el.id} />
            ) : null
          )
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

        {paginado[1] >= alldogs.length ? (
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

/*

 {loading ? (
          <div className={styles.loadingCont}>
            <img src={loadingImg} alt="" />
          </div>
        ) : (
          alldogs.map((perros) => {
            return <Target props={perros} key={perros.id}></Target>;
          })
        )}


*/
