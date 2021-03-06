/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./Create.module.css";
import { FiSave } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createDog } from "../../Actions";
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import dog from "./../../assets/asoma.png";
import { getTemperaments } from "../../Actions/index";

const Create = () => {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);

  function validate(data) {
    const errors = {};
    if (!data.name) errors.name = "You must enter a breed or name";
    if (!data.height_min) errors.height_min = "You must enter a minimum height";
    if (!data.height_max) errors.height_max = "You must enter a maximum height";
    if (!data.weight_min) errors.weight_min = "You must enter a minimum weight";
    if (!data.weight_max) errors.weight_max = "You must enter a maximum weight";
    if (!data.life_span) errors.life_span = "You must enter a life span";

    return errors;
  }

  const history = useHistory();

  const [formData, setFormData] = React.useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperaments: "",
  });

  const [errors, setErrors] = React.useState({});
  const [error_inputs, setError_inputs] = React.useState(false);

  function handleChange(e) {
    if (e === document.form[6]) {
      console.log("handle :", e);
      setFormData((prevData) => {
        let txT = e.value.split(",");
        // console.log(txT);
        const state = {
          ...prevData,
          [e.name]: txT,
        };
        // console.log(txT);
        const validations = validate(state);
        setErrors(validations);

        return state;
      });
    } else if (e.target.name === "temperaments") {
      setFormData((prevData) => {
        let txT = e.target.value.split(",");
        // console.log(txT);
        const state = {
          ...prevData,
          [e.target.name]: txT,
        };
        // console.log(txT);
        const validations = validate(state);
        setErrors(validations);

        return state;
      });
    } else {
      if (e.target.name === "image") {
        console.log(e.target.value);
        // document.img.img1.src = e.target.value;
        document.img1.src = e.target.value;
      }
      setFormData((prevData) => {
        let txT =
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        const state = {
          ...prevData,
          [e.target.name]: txT,
        };
        // console.log(txT);
        const validations = validate(state);
        setErrors(validations);

        return state;
      });
    }
  }

  function agregarAlInput(e) {
    console.log(e.target.value);
    let valorActual = document.form.temperaments.value;
    console.log(valorActual);
    if (!valorActual.length) {
      document.form.temperaments.value = valorActual.concat(e.target.value);
    } else {
      document.form.temperaments.value = valorActual.concat(
        ",",
        e.target.value
      );
    }
    // document.form.temperaments.value = valorActual.concat(e.target.value, ",");

    handleChange(document.form[6]);
  }

  function handleSubmit(e) {
    e.preventDefault(); // <----------------------------prevent default!!!
    if (
      !formData.name.length ||
      !formData.life_span.length ||
      !formData.weight_min.length ||
      !formData.weight_max.length ||
      !formData.height_min.length ||
      !formData.height_max.length
    ) {
      setError_inputs(true);
      alert("Campos obliatorios vacios vacios");
    } else {
      setError_inputs(false);
      // console.log(formData);

      createDog(formData);

      setFormData({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        image: "",
        temperaments: "",
      });
      history.goBack();
    }
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div className={styles.contRey}>
      <div
        id="cartel"
        className={error_inputs ? styles.cartel_none : styles.cartel_ok}
      >
        <button>Campos obligatorios vacios!</button>
      </div>
      <img src={dog} alt=""></img>
      <div className={styles.caja}>
        <form
          name="form"
          id="form_id"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <FormItem
            label="Breed:"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            error={errors.name}
          />
          <div className={styles.alturas}>
            <FormItem
              label="Height Min:"
              name="height_min"
              value={formData.height_min}
              handleChange={handleChange}
              error={errors.height_min}
            />
            <FormItem
              label="Height Max:"
              name="height_max"
              value={formData.height_max}
              handleChange={handleChange}
              error={errors.height_max}
            />
          </div>
          <div className={styles.pesos}>
            <FormItem
              label="Weight Min:"
              name="weight_min"
              value={formData.weight_min}
              handleChange={handleChange}
              error={errors.weight_min}
            />
            <FormItem
              label="Weight Max:"
              name="weight_max"
              value={formData.weight_max}
              handleChange={handleChange}
              error={errors.weight_max}
            />
          </div>
          <FormItem
            label="Life Span:"
            name="life_span"
            value={formData.life_span}
            handleChange={handleChange}
            error={errors.life_span}
          />

          <FormItem
            id="input_temp"
            label="Temperaments:"
            name="temperaments"
            value={formData.temperaments}
            handleChange={handleChange}
            error=""
            optional="Optional"
          />

          <select
            onChange={(e) => agregarAlInput(e)}
            style={{
              width: "fit-content",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "none",
              padding: "3px",
            }}
          >
            <option key={0} type="checkbox" name="tempSele">
              Select:
            </option>
            {allTemperaments &&
              allTemperaments.map((el) => (
                <option key={el} type="checkbox" name="tempSele">
                  {el}
                </option>
              ))}
          </select>

          <FormItem
            label="Url image:"
            name="image"
            value={formData.image}
            handleChange={handleChange}
            error=""
            optional="Optional"
          />

          <div className={styles.contBotonImg}>
            <img
              name="img1"
              // style={{ width: "100px", height: "100px" }}
              src="https://http2.mlstatic.com/D_NQ_NP_764801-MLM45688274965_042021-V.jpg"
              alt=""
            />

            <div className={styles.botonSave}>
              <button type="submit">
                <FiSave />
                SAVE
              </button>
            </div>
          </div>
          <div
            id="cartel"
            className={error_inputs ? styles.cartel_none : styles.cartel_ok}
          >
            <button>Campos obligatorios vacios!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function FormItem({ label, name, value, handleChange, error, optional }) {
  return (
    <div className={styles.compInput}>
      <div className={styles.label}>
        <p>{label}</p>
      </div>

      <input
        placeholder={optional}
        autoComplete="off"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span style={{ color: "red", fontWeight: 500, fontSize: "10px" }}>
        {error}
      </span>
    </div>
  );
}

export default Create;
