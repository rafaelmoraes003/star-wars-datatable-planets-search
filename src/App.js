import React from 'react';
import Provider from './context/Provider';
import StarWarsIntro from './components/StarWarsIntro';
import PlanetInput from './components/PlanetInput';
import NumberFilter from './components/NumberFilter';
import OrderInput from './components/OrderInput';
import UsedFilters from './components/UsedFilters';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <StarWarsIntro />
      <div id="main-content">
        <div id="filters-container">
          <PlanetInput />
          <NumberFilter />
          <OrderInput />
          <UsedFilters />
        </div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
