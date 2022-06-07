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

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleNumericChanges = () => {
    if (operatorValue === 'maior que') {
      const filteredByBigger = data.filter((planet) => (
        Number(planet[columnValue]) > Number(numberValue)
      ));
      setFilteredData(filteredByBigger);
    } else if (operatorValue === 'menor que') {
      const filteredBySmallest = data.filter((planet) => (
        Number(planet[columnValue]) < Number(numberValue)
      ));
      setFilteredData(filteredBySmallest);
    } else {
      const filteredByEqual = data.filter((planet) => (
        Number(planet[columnValue]) === Number(numberValue)
      ));
      setFilteredData(filteredByEqual);
    }
  };

  useEffect(() => { // filtra os nomes dos planetas de acordo com o input
    const filtered = data.filter((planet) => (
      planet.name.includes(inputValue)
    ));
    setFilteredData(filtered);
  }, [inputValue, data]);

  const contextValue = {
    data,
    filteredData,
    handleChange,
    filterByName: {
      name: inputValue,
    },
    setColumnValue,
    setOperatorValue,
    setNumberValue,
    numberValue,
    handleNumericChanges,
    filterByNumericValues: [
      {
        column: columnValue,
        comparison: operatorValue,
        value: numberValue,
      },
    ],
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
