import React from 'react'
import Header from './components/headerSection/HeaderSection'
import SearchArea from './components/searchArea/searchArea'
import SearchResultList from './components/searchResultList/searchResultList'
import SelectedMovieContent from './components/selectedMovieContent/selectedMovieContent'
import './App.css'

function App() {
  return (
    //only components should live here. Most logic will live in the imported components
    <div>
      <Header/>
      <SearchArea/>
      <SearchResultList/>
      <SelectedMovieContent/>
    </div>
  );
}

export default App;
