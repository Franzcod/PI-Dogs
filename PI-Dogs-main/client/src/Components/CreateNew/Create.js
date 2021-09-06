import React from "react";
import styles from "./Create.module.css";
import { FiSave } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
import { createDog } from "../../Actions";
import { Redirect } from "react-router-dom";

const Create = () => {
  function validate(data) {
    const errors = {};
    if (!data.name) errors.name = "You must enter a breed";
    if (!data.height_min) errors.height = "You must enter a minimum height";
    if (!data.height_max) errors.height = "You must enter a maximum height";
    if (!data.weight_min) errors.weight = "You must enter a minimum weight";
    if (!data.weight_max) errors.weight = "You must enter a maximum weight";

    return errors;
  }

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

  function handleChange(e) {
    if (e.target.name === "temperaments") {
      setFormData((prevData) => {
        let txT = e.target.value.split(", ");
        console.log(txT);
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

  function handleSubmit(e) {
    e.preventDefault(); //                 <----------------------------prevent default!!!

    if (Object.values(errors).length > 0)
      alert("Completa la informacion solicitada");
    else {
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
    }
  }

  function volver() {
    <Redirect push to="/somewhere/else" />;
  }

  return (
    <div className={styles.contRey}>
      <div className={styles.caja}>
        <form id="form_id" onSubmit={handleSubmit} className={styles.form}>
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
              error={errors.height}
            />
            <FormItem
              label="Height Max:"
              name="height_max"
              value={formData.height_max}
              handleChange={handleChange}
              error={errors.height}
            />
          </div>
          <div className={styles.pesos}>
            <FormItem
              label="Weight Min:"
              name="weight_min"
              value={formData.weight_min}
              handleChange={handleChange}
              error={errors.weight}
            />
            <FormItem
              label="Weight Max:"
              name="weight_max"
              value={formData.weight_max}
              handleChange={handleChange}
              error={errors.weight}
            />
          </div>
          <FormItem
            label="Life Span:"
            name="life_span"
            value={formData.life_span}
            handleChange={handleChange}
            error=""
          />

          <FormItem
            label="Url image:"
            name="image"
            value={formData.image}
            handleChange={handleChange}
            error=""
          />

          <FormItem
            label="Temperaments:"
            name="temperaments"
            value={formData.temperaments}
            handleChange={handleChange}
            error=""
          />

          <div className={styles.botonSave}>
            <button
              type="submit"
              onClick={() => {
                volver();
              }}
            >
              <FiSave />
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function FormItem({ label, name, value, handleChange, error }) {
  return (
    <div className={styles.compInput}>
      <div className={styles.label}>
        <p>{label}</p>
      </div>

      <input
        autoComplete="off"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span style={{ color: "red", fontWeight: 700 }}>{error}</span>
    </div>
  );
}

export default Create;
