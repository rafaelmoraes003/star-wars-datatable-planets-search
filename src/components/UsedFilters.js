import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function UsedFilters() {
  const { filterByNumericValues } = useContext(StarWarsContext);

  return (
    <div>
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map((item, index) => (
          <div key={ index }>
            <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
            {/* <i
              id={ index }
              className="fa-solid fa-trash"
              onClick={ ({ target }) => console.log(filterByNumericValues[target.id]) }
            /> */}
          </div>
        ))
      )}
    </div>
  );
}

export default UsedFilters;
