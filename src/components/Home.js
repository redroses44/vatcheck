import React, { useContext } from 'react';
import VatContext from '../context/vat/vatContext';
import Data from './Data';
import Form from './Form';
import Spinner from './Spinner';

const Home = () => {
  const vatContext = useContext(VatContext);
  const { loading, data } = vatContext;
  return (
    <div>
      {data ? (
        loading ? (
          <Spinner />
        ) : <Data data={data} />
      ) : (
        <Form formName="Vat Form" />
      )}
    </div>
  );
};

export default Home;
