import {
  CLEAR_ERROR,
  CLEAR_VAT,
  ERROR,
  FETCH_VAT,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_VAT:
      return {
        ...state,
        data: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case CLEAR_VAT:
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
};
