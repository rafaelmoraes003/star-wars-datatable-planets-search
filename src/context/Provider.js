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
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [enableRemoveFilter, setEnableRemoveFilter] = useState(false);
  const [orderColumn, setOrderColumn] = useState('population');
  const [ordenation, setOrdenation] = useState('ASC');
  const [order, setOrder] = useState({
    column: orderColumn,
    sort: ordenation,
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json();
        const sortData = results.sort((a, b) => a.name.localeCompare(b.name));
        setData(sortData);
        setFilteredData(sortData);
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
    setFilterByNumericValues(filterByNumericValues.concat({
      column: columnValue,
      comparison: operatorValue,
      value: numberValue,
    }));
    setEnableRemoveFilter(false);
    setColumnOptions(columnOptions.filter((item) => item !== columnValue));
  };

  const clearAllFilters = () => {
    setFilteredData(data);
    setFilterByNumericValues([]);
  };

  const removeFilter = (value) => {
    setColumnOptions(columnOptions.concat(value));
    setFilterByNumericValues(filterByNumericValues.filter((i) => i.column !== value));
    setEnableRemoveFilter(true);
  };

  const setBaseArray = (baseArray) => {
    filterByNumericValues.forEach((item) => {
      if (item.comparison === 'maior que') {
        const filteredByBigger = baseArray.filter((planet) => (
          Number(planet[item.column]) > Number(item.value)
        ));
        setFilteredData(filteredByBigger);
      } else if (item.comparison === 'menor que') {
        const filteredBySmallest = baseArray.filter((planet) => (
          Number(planet[item.column]) < Number(item.value)
        ));
        setFilteredData(filteredBySmallest);
      } else {
        const filteredByEqual = baseArray.filter((planet) => (
          Number(planet[item.column]) === Number(item.value)
        ));
        setFilteredData(filteredByEqual);
      }
    });
  };

  const setFilterByCondition = () => {
    if (enableRemoveFilter) { // Filtra se clicado no botão de remover filtro específico
      setBaseArray(data);
    } else { // FIltra em 'cadeia' (filtragem normal)
      setBaseArray(filteredData);
    }
  };

  useEffect(() => {
    setColumnValue(columnOptions[0]);
    setNumberValue(0);
    if (filterByNumericValues.length < 1) {
      setFilteredData(data);
    } else {
      setFilterByCondition();
    }
  }, [filterByNumericValues]);

  const changeDataOrder = () => {
    if (order.sort === 'ASC') {
      const correctAscOrder = filteredData.sort((a, b) => (
        a[order.column] - b[order.column]
      ));
      setFilteredData(correctAscOrder);
    }

    if (order.sort === 'DESC') {
      const descOrder = filteredData.sort((a, b) => (
        a[order.column] - b[order.column]
      ));
      const correctDescOrder = descOrder.sort((a, b) => (
        a[order.column] - b[order.column]
      ));
      const fullyCorrectOrder = correctDescOrder.sort((a, b) => (
        b[order.column] - a[order.column]
      ));
      setFilteredData(fullyCorrectOrder);
    }

    setOrder({
      column: orderColumn,
      sort: ordenation,
    });
  };

  useEffect(() => {
    setOrder({
      column: orderColumn,
      sort: ordenation,
    });
  }, [orderColumn, ordenation]);

  const contextValue = {
    data,
    filteredData,
    filterByName: {
      name: inputValue,
    },
    order,
    columnOptions,
    numberValue,
    filterByNumericValues,
    functions: {
      setInputValue,
      setColumnValue,
      setOperatorValue,
      setNumberValue,
      handleNumericChanges,
      clearAllFilters,
      removeFilter,
      setOrderColumn,
      setOrdenation,
      changeDataOrder,
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
