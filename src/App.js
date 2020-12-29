
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
        nominatedMovie: []
    }
  }

  movieInformation = (matchingMoviesData) => {
    const matchingMoviesResults = matchingMoviesData.Search
    this.setState({
      matchingMovies: matchingMoviesResults
    })
  }

  // addNote(newNote) {
  //   this.setState({ toDoNotes: [...this.state.toDoNotes, newNote]})
  // }

  setNominatedMovie = (movie) => {
    this.setState({
      nominatedMovie: [...this.state.nominatedMovie, movie]
    })
    // might need to use the spread operator to include the previous nominated movies
  }


  render(){
    console.log("hope this works!!!", this.state.nominatedMovie);
    return (
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        {/* <SearchResultList matchingMovies={this.state.matchingMovies} nominatedMovie={this.state.nominatedMovie} setNominatedMovie={()=>this.setNominatedMovie(nominatedMovie)}/> */}
        <SearchResultList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie}/>
        <Nominations nominatedMovie={this.state.nominatedMovie}/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


