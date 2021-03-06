
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
        nominatedMovies: []
    }
  }

  movieInformation = (matchingMoviesData) => {
    const matchingMoviesResults = matchingMoviesData.Search

    this.setState({
      matchingMovies: matchingMoviesResults
    })
  }

  setNominatedMovie = (movie) => {
    if(this.state.nominatedMovies.length < 5){
      this.setState({
        nominatedMovies: [...this.state.nominatedMovies, movie],
      })
    }else {
      alert("Sorry! Only up to 5 nominations are allowed.")
    }
  }

  matchingMovieFunc = (movie) => {
    console.log("matching Movie Test function", movie)
  }

  removeNominatedMovie = (selectedMovie) => {
      this.setState({
      nominatedMovies: this.state.nominatedMovies.filter((movie)=>{
        return movie !== selectedMovie
      })
    })
    // once the movie is removed, it should have the ability to renominate the movie again, meaning the "Nominate" button is no longer disabled. 
  }

  render(){
    console.log("state nominatedMovies: ", this.state.nominatedMovies);
    return (
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        <SearchResultList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie} nominatedMoviesLength={this.state.nominatedMovies.length} />
        <Nominations nominatedMovie={this.state.nominatedMovies} removeNominatedMovie={this.removeNominatedMovie} matchingMovies={this.state.matchingMovies}/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


