import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './PlanetInput.css';

function PlanetInput() {
  const { functions } = useContext(StarWarsContext);
  const { setInputValue } = functions;

  return (
    <div id="planet-name-container">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Planet name"
        onChange={ ({ target }) => setInputValue(target.value) }
      />
    </div>
  );
}

export default PlanetInput;
