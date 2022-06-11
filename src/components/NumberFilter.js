import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './NumberFilter.css';

function NumberFilter() {
  const { functions, columnOptions, numberValue } = useContext(StarWarsContext);
  const {
    setColumnValue,
    setOperatorValue,
    setNumberValue,
    handleNumericChanges,
    clearAllFilters,
  } = functions;

  const operatorList = ['maior que', 'menor que', 'igual a'];

  return (
    <div id="numeric-filter-container">
      <label htmlFor="column">
        Coluna
        <select
          id="column"
          className="form-select"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumnValue(target.value) }
        >
          {columnOptions.map((item) => (
            <option value={ item } key={ item }>{item}</option>
          ))}
        </select>
      </label>

      <label htmlFor="operator">
        Operador
        <select
          id="operator"
          className="form-select"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setOperatorValue(target.value) }
        >
          {operatorList.map((item) => (
            <option value={ item } key={ item }>{item}</option>
          ))}
        </select>
      </label>

      <label htmlFor="number">
        Valor
        <input
          type="number"
          id="number"
          className="input-group-text"
          data-testid="value-filter"
          value={ numberValue }
          onChange={ ({ target }) => setNumberValue(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericChanges }
        className="btn btn-outline-warning"
      >
        Filtrar
      </button>

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearAllFilters }
        className="btn btn-outline-warning"
      >
        Remover filtros
      </button>
    </div>
  );
}

export default NumberFilter;
