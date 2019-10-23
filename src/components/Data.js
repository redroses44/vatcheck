import React, { useContext } from 'react';
import Moment from 'react-moment';
import VatContext from '../context/vat/vatContext';

const Data = ({
  data: { Address, CountryCode, Name, RequestDate, VATNumber, Valid }
}) => {
  const vatContext = useContext(VatContext);
  const { clearVat } = vatContext;

  const formattedDate = RequestDate.substr(0, RequestDate.length - 6);

  const goBack = () => {
    clearVat();
  };

  return (
    <div className="card flex-center">
      <h1 className="card-header"> Vat Number Info</h1>
      <div className="card-body">
        {Address && <li>Address: {Address}</li>}
        {CountryCode && <li>CountryCode: {CountryCode}</li>}
        {Name && <li>Name: {Name}</li>}
        {RequestDate && (
          <li>
            Date of request:{' '}
            <Moment format="DD-MM-YYYY">{formattedDate}</Moment>
          </li>
        )}
        {VATNumber && <li>VatNumber: {VATNumber}</li>}
        {Valid ? <li>Valid: true</li> : <li>Valid: false</li>}
        <button className="btn back" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Data;
