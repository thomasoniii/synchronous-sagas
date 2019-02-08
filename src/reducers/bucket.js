import {
  INCREMENT_ALFA,
  INCREMENT_BRAVO,
  INCREMENT_CHARLIE,
  INCREMENT_DELTA
} from '../constants/types';

const INITIAL = {
  alfa    : 0,
  bravo   : 0,
  charlie : 0,
  delta   : 0
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case INCREMENT_ALFA :
      console.log("increments alfa");
      return { ...state, alfa : state.alfa + 1 }
    case INCREMENT_BRAVO :
      console.log("increments bravo");
      return { ...state, bravo : state.bravo + 1 }
    case INCREMENT_CHARLIE :
      console.log("increments charlie");
      return { ...state, charlie : state.charlie + 1 }
    case INCREMENT_DELTA :
      console.log("increments delta");
      return { ...state, delta : state.delta + 1 }
    default :
      return state;
  }
}
