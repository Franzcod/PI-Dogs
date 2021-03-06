// import axios from "axios";

import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_CREATE_USER,
  GET_DOGS_FOR_API,
  GET_DOGS_FOR_TEMP,
  GET_DOGS_FOR_BREED,
  GET_DOG_FOR_ID,
  IS_FAVORITE,
  GET_FAVORITES,
  DELETE_FAVORITES,
} from "../Actions/types";

const initialState = {
  dogs: [],
  favorites: [],
  temteraments: [],
  dog: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case GET_DOGS_CREATE_USER:
      return { ...state, dogs: action.payload };
    case GET_DOGS_FOR_API:
      return { ...state, dogs: action.payload };
    case GET_DOGS_FOR_TEMP:
      return { ...state, dogs: action.payload };
    case GET_DOGS_FOR_BREED:
      return { ...state, dogs: action.payload };
    case GET_DOG_FOR_ID:
      return { ...state, dog: action.payload };
    case GET_FAVORITES:
      return {
        ...state,
      };
    case IS_FAVORITE:
      // console.log(action.payload);
      let esta = state.favorites.find((el) => el.id === action.payload.id);
      // console.log(esta);
      if (esta === undefined) state.favorites.push(action.payload);
      return { ...state };
    case DELETE_FAVORITES:
      state.favorites = state.favorites.filter(
        (el) => el.id !== action.payload
      );

      return { ...state };

    default:
      return { ...state };
  }
}
