
import React, { Component } from 'react'
import Header from './components/headerSection/HeaderSection'
import SearchArea from './components/searchArea/searchArea'
import SearchResultList from './components/searchResultList/searchResultList'
import SelectedMovieContent from './components/selectedMovieContent/selectedMovieContent'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        searchedMovie : " ",
        matchingMovies: []
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
      <div>
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        <SearchResultList matchingMovies={this.state.matchingMovies}/>
        <SelectedMovieContent/>
      </div>
    )
  }
  
}


