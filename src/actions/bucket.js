import {
  INCREMENT_ALFA,
  INCREMENT_BRAVO,
  INCREMENT_CHARLIE,
  INCREMENT_DELTA
} from '../constants/types';

export const incrementAlfa = () => {
  return {
    type : INCREMENT_ALFA
  }
}

export const incrementBravo = () => {
  return {
    type : INCREMENT_BRAVO
  }
}

export const incrementCharlie = () => {
  return {
    type : INCREMENT_CHARLIE
  }
}

export const incrementDelta = () => {
  return {
    type : INCREMENT_DELTA
  }
}
