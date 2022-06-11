import React from 'react';
import introGif from './projectIntro.gif';
import './StarWarsIntro.css';

function StarWarsIntro() {
  return (
    <div id="gif-container">
      <img src={ introGif } alt="Star Wars Gif" />
    </div>
  );
}

export default StarWarsIntro;
