import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [columnValue, setColumnValue] = useState('population');
  const [operatorValue, setOperatorValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // ------------------------------------------------------------------------------------------ USEEFFECT

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json();
        setData(results);
        setFilteredData(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    const filtered = data.filter((planet) => (
      planet.name.includes(inputValue)
    ));
    setFilteredData(filtered);
  }, [inputValue, data]);

  const handleNumericChanges = () => {
    if (operatorValue === 'maior que') {
      const filteredByBigger = filteredData.filter((planet) => (
        Number(planet[columnValue]) > Number(numberValue)
      ));
      setFilteredData(filteredByBigger);
    } else if (operatorValue === 'menor que') {
      const filteredBySmallest = filteredData.filter((planet) => (
        Number(planet[columnValue]) < Number(numberValue)
      ));
      setFilteredData(filteredBySmallest);
    } else {
      const filteredByEqual = filteredData.filter((planet) => (
        Number(planet[columnValue]) === Number(numberValue)
      ));
      setFilteredData(filteredByEqual);
    }

    setFilterByNumericValues(filterByNumericValues.concat({
      column: columnValue,
      comparison: operatorValue,
      value: numberValue,
    }));
  };

  const contextValue = {
    data,
    filteredData,
    filterByName: {
      name: inputValue,
    },
    numberValue,
    filterByNumericValues,
    functions: {
      setInputValue,
      setColumnValue,
      setOperatorValue,
      setNumberValue,
      handleNumericChanges,
    },
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
