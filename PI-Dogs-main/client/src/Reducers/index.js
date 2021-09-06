import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_CREATE_USER,
  GET_DOGS_FOR_API,
  GET_DOGS_FOR_TEMP,
  GET_DOGS_FOR_BREED,
  GET_DOG_FOR_ID,
} from "../Actions/types";

const initialState = {
  dogs: [],
  temteraments: [],
  dog: [],
  // pages: [0, 7],
  // pag: {pages: [], n: 1, max: [], items: 9, render: true, c: 0},
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

    default:
      return { ...state };
  }
}
