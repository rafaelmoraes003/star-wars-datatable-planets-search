import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './UsedFilters.css';

function UsedFilters() {
  const { filterByNumericValues, functions } = useContext(StarWarsContext);
  const { removeFilter } = functions;

  return (
    <div className="used-filters-container">
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map((item, index) => (
          <div key={ index } data-testid="filter" className="filter">
            <h4>{`${item.column} ${item.comparison} ${item.value}`}</h4>
            <button
              type="button"
              id={ item.column }
              className="btn btn-outline-danger"
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
