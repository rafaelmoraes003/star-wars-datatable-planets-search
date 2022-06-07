import React from 'react';
import Provider from './context/Provider';
import PlanetInput from './components/PlanetInput';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetInput />
      <Table />
    </Provider>
  );
}

export default App;
