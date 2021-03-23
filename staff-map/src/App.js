import React from 'react'

import MapProvider from './contexts/MapContext'
import Map from './components/Map'
import SearchBar from './components/SearchBar'
import FileUpload from './components/FileUpload'

import './App.css';

function App() {
  return (
    <>
      <MapProvider>
        <Map></Map>
        <SearchBar></SearchBar>
        <FileUpload></FileUpload>
      </MapProvider>
    </>
  );
}

export default App;
