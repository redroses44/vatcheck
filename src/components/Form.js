import React, { useContext, useState } from 'react';
import VatContext from '../context/vat/vatContext';

const Form = ({ formName }) => {
  const [vatNumber, setVatNumber] = useState('');
  const vatContext = useContext(VatContext);
  const { fetchVat, error } = vatContext;

  const onChange = e => {
    setVatNumber(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchVat(vatNumber);
  };

  return (
    <form onSubmit={onSubmit} className="flex-center">
      <h1>{formName}</h1>
      {error && <span className="alert">{error}</span>}
      <div className="input-field">
        <input
          value={vatNumber}
          onChange={onChange}
          className="input"
          type="text"
          placeholder="Enter VTA number"
        />
      </div>
      <input className="btn" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
