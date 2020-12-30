
import React, { Component } from 'react'
import Header from './components/headerSection/HeaderSection'
import SearchArea from './components/searchArea/searchArea'
import SearchResultList from './components/searchResultList/searchResultList'
import Nominations from './components/nominations/nominations'
// import SelectedMovieContent from './components/selectedMovieContent/selectedMovieContent'
import './App.css'

//able to get movie info after clicking on nominate button. Now i want to add that nominated moive info into appropriate section

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
    //if nominatedMovies.length < 6 set the movie, else alert that max nominations is 5

    if(this.state.nominatedMovies.length < 5){
      this.setState({
        nominatedMovies: [...this.state.nominatedMovies, movie],
      })
    }else {
      alert("Sorry! Only up to 5 nominations are allowed.")
    }

    
  }


  render(){
    return (
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        <SearchResultList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie} />
        <Nominations nominatedMovie={this.state.nominatedMovies}/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


