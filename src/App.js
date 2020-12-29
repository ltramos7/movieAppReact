
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
        nominatedMovie: {
          title: "",
          year: ""
        }
    }
  }

  movieInformation = (matchingMoviesData) => {
    const matchingMoviesResults = matchingMoviesData.Search
    this.setState({
      matchingMovies: matchingMoviesResults
    })
  }

  setNominatedMovie = (movie) => {
    // this.setState = ({
    //     nominatedMovie : {
    //         title: movie.Title,
    //         year: movie.Year
    //     }
    // }) 
    console.log("set nominated movie function reached....", movie)
  }


  render(){
    // console.log(this.state.nominatedMovie)
    return (
      //only components should live here. Most logic will live in the imported components
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        {/* <SearchResultList matchingMovies={this.state.matchingMovies} nominatedMovie={this.state.nominatedMovie} setNominatedMovie={()=>this.setNominatedMovie(nominatedMovie)}/> */}
        <SearchResultList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie}/>
        <Nominations/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


