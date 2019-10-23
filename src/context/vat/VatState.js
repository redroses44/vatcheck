import axios from 'axios';
import React, { useReducer } from 'react';
import {
  CLEAR_ERROR,
  CLEAR_VAT,
  ERROR,
  FETCH_VAT,
  SET_LOADING
} from '../types';
import VatContext from './vatContext';
import VatReducer from './vatReducer';

const VatState = ({ children }) => {
  const initialState = {
    data: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(VatReducer, initialState);

  const fetchVat = async vatNumber => {
    try {
      dispatch({ type: SET_LOADING });
      const response = await axios.get(
        `https://vat.erply.com/numbers?vatNumber=${vatNumber}`
      );
      dispatch({
        type: FETCH_VAT,
        payload: response.data
      });
      setTimeout(() => {
        dispatch({ type: SET_LOADING });
      }, 500);
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          error.response.status === 400
            ? 'Please enter a value'
            : 'Invalid value'
      });
      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 3000);
    }
  };

  const clearVat = () => dispatch({ type: CLEAR_VAT });

  return (
    <VatContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        fetchVat,
        error: state.error,
        clearVat
      }}
    >
      {children}
    </VatContext.Provider>
  );
};

export default VatState;
