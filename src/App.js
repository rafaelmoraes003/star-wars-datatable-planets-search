import React from 'react';
import Provider from './context/Provider';
import PlanetInput from './components/PlanetInput';
import NumberFilter from './components/NumberFilter';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetInput />
      <NumberFilter />
      <Table />
    </Provider>
  );
}

export default App;
