import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderInput() {
  const { functions } = useContext(StarWarsContext);
  const { setOrderColumn, setOrdenation, changeDataOrder } = functions;

  const list = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <>
      <label htmlFor="column-sort">
        Ordernar
        <select
          data-testid="column-sort"
          name="input"
          id="column-sort"
          onChange={ (e) => setOrderColumn(e.target.value) }
        >
          {list.map((item) => (
            <option
              value={ item }
              key={ item }
            >
              {item}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="asc">
        Ascendente
        <input
          type="radio"
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          id="asc"
          onClick={ (e) => setOrdenation(e.target.value) }
        />
      </label>

      <label htmlFor="desc">
        Descendente
        <input
          type="radio"
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          id="desc"
          onClick={ (e) => setOrdenation(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ changeDataOrder }
      >
        Ordernar
      </button>
    </>
  );
}

export default OrderInput;
