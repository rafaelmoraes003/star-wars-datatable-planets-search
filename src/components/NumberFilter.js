import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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
    <>
      <label htmlFor="column">
        Coluna
        <select
          id="column"
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
          data-testid="value-filter"
          value={ numberValue }
          onChange={ ({ target }) => setNumberValue(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericChanges }
      >
        Filtrar
      </button>

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearAllFilters }
      >
        Remover filtros
      </button>
    </>
  );
}

export default NumberFilter;
