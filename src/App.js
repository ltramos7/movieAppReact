
import React from 'react'
import Header from './components/headerSection/HeaderSection'
import SearchArea from './components/searchArea/searchArea'

function App() {
  return (
    //only components should live here. Most logic will live in the imported components
    <div>
      <Header/>
      <SearchArea/>
    </div>
  );
}

export default App;
