import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import loadingImg from "../../assets/loadingDog_2.gif";
import { IoMdCheckbox } from "react-icons/io";
import Target from "./Targets/Target";

const Home = () => {
  const [perros, setPerros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`http://localhost:3001/api/dogs/`);

      const data = await res.json();
      let perros = data;
      //   console.log(perros);

      setLoading(false);
      setPerros(perros);
    };
    getPokemon();
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
                //   searchByInput(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <IoMdCheckbox
            className={styles.iconEnter}
            onClick={() => {
              //   submiteado();
            }}
          />
        </div>
      </div>
      <div className={styles.contFiltros}>
        <select>
          <option value="x">Order...</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
          <option value="weight_min">Weight min</option>
          <option value="weight_max">Weight max</option>
        </select>

        <select>
          <option value="All">All</option>
          <option value="false">Real</option>
          <option value="true">Created</option>
        </select>

        <select>
          <option value="All">Temperament</option>
          {/*{temperament.map((t, i) => (
            <div key={i}>
                <label>{t}</label>
                <button className={styles.index} onClick={e => handleRemoveTemp(t, temperament, setTemperament, dispatch,dogsStore,pag)}>x</button>
            </div>
        ))}*/}
        </select>
      </div>

      <div className={styles.contRey}>
        {loading ? (
          <div className={styles.loadingCont}>
            <img src={loadingImg} alt="" />
          </div>
        ) : (
          perros.map((perros) => {
            return <Target props={perros} key={perros.id}></Target>;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
