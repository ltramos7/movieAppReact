
import React, { Component } from 'react'
import Header from './components/headerSection/HeaderSection'
import SearchArea from './components/searchArea/searchArea'
import SearchResultList from './components/searchResultList/searchResultList'
import Nominations from './components/nominations/nominations'
// import SelectedMovieContent from './components/selectedMovieContent/selectedMovieContent'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        searchedMovie : " ",
        matchingMovies: [],
        nominatedMovie: {}
    }
  }

  movieInformation = (matchingMoviesData) => {
    const matchingMoviesResults = matchingMoviesData.Search
    this.setState({
      matchingMovies: matchingMoviesResults
    })
}


  render(){
    return (
      //only components should live here. Most logic will live in the imported components
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        <SearchResultList matchingMovies={this.state.matchingMovies} nominatedMovie={this.state.nominatedMovie}/>
        <Nominations/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


