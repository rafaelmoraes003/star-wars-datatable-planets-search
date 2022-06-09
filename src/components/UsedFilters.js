import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function UsedFilters() {
  const { filterByNumericValues, functions } = useContext(StarWarsContext);
  const { removeFilter } = functions;

  return (
    <div>
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map((item, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
            <button
              type="button"
              id={ item.column }
              onClick={ (e) => removeFilter(e.target.id) }
            >
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UsedFilters;
