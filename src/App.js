import React from 'react';
import Provider from './context/Provider';
import PlanetInput from './components/PlanetInput';
import NumberFilter from './components/NumberFilter';
import UsedFilters from './components/UsedFilters';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetInput />
      <NumberFilter />
      <UsedFilters />
      <Table />
    </Provider>
  );
}

export default App;
