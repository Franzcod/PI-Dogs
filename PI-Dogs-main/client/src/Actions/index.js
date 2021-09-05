import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_CREATE_USER,
  GET_DOGS_FOR_TEMP,
  GET_DOGS_FOR_BREED,
} from "./types";
import axios from "axios";

export function getDogs() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/dogs/").then((resp) => {
      //   console.log("de action ", resp.data);
      dispatch({ type: GET_DOGS, payload: resp.data });
    });
  };
}

// Get todos los temperamentos
export function getTemperaments() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/temperaments/").then((resp) => {
      // console.log("de action ", resp.data);
      dispatch({ type: GET_TEMPERAMENTS, payload: resp.data });
    });
  };
}
//Get dogs creados por el usuario
export function getDogsCreateByUser() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/dogs/").then((resp) => {
      let aux = resp.data.filter((el) => {
        return el.userCreate === true;
      });

      dispatch({ type: GET_DOGS_CREATE_USER, payload: aux });
    });
  };
}

// Get dogs originarios de la API
export function getDogsForApi() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/dogs/").then((resp) => {
      let aux = resp.data.filter((el) => {
        return el.userCreate === false;
      });

      dispatch({ type: GET_DOGS_CREATE_USER, payload: aux });
    });
  };
}

// traer los dogs con el temperamento mencionado
export function getDogsForTemperament(temp) {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/dogs/").then((resp) => {
      let aux = resp.data.filter((el) => {
        return el.temperaments && el.temperaments.split(", ").includes(temp);
      });

      dispatch({ type: GET_DOGS_FOR_TEMP, payload: aux });
    });
  };
}

export function getByBreed(breed) {
  console.log("backend ", breed);
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/api/dogs?name=` + breed)
      .then((resp) => {
        dispatch({ type: GET_DOGS_FOR_BREED, payload: resp.data });
      });
  };
}
