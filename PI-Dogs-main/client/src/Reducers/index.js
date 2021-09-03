import {} from "../Actions";

const initialState = {
  dogs: [],
  // detail: {},
  // temperaments: [],
  // favorites: [],
  // selected: [],
  // pag: {pages: [], n: 1, max: [], items: 9, render: true, c: 0},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_DOGS:
    //     return {...state, dogs: action.payload};
    // case SET_TEMPERAMENTS:
    //     return {...state, temperaments: action.payload};
    // case SET_DETAIL:
    //     return {...state, detail: action.payload};
    // case RESET_DETAIL:
    //     return {...state, detail: action.payload};
    // case SET_FAVORITES:
    //     return {...state, favorites: action.payload};
    // case 'SET_SELECTED':
    //     return {...state, selected: action.payload};
    // case 'SET_PAG':
    //     return {...state, pag: action.payload};
    default:
      return { ...state };
  }
}
