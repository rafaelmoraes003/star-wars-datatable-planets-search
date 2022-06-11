import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './OrderInput.css';

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
    <div id="order-input-container">
      <label htmlFor="column-sort">
        Ordernar
        <select
          data-testid="column-sort"
          name="input"
          id="column-sort"
          className="form-select"
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

      <div className="radio-btn-holder">
        <label htmlFor="asc">
          Ascendente
          <input
            type="radio"
            name="order"
            value="ASC"
            data-testid="column-sort-input-asc"
            className="form-check-input"
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
            className="form-check-input"
            id="desc"
            onClick={ (e) => setOrdenation(e.target.value) }
          />
        </label>
      </div>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ changeDataOrder }
        className="btn btn-outline-warning"
      >
        Ordernar
      </button>
    </div>
  );
}

export default OrderInput;
