import React from 'react';
import Provider from './context/Provider';
import PlanetInput from './components/PlanetInput';
import NumberFilter from './components/NumberFilter';
import OrderInput from './components/OrderInput';
import UsedFilters from './components/UsedFilters';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetInput />
      <NumberFilter />
      <OrderInput />
      <UsedFilters />
      <Table />
    </Provider>
  );
}

export default App;
