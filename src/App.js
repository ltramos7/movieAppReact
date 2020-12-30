
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
    if(this.state.nominatedMovies.length < 5){
      this.setState({
        nominatedMovies: [...this.state.nominatedMovies, movie],
      })
    }else {
      alert("Sorry! Only up to 5 nominations are allowed.")
    }
  }

  removeNominatedMovie = (movie) => {
    // console.log("remove nominated movie function reached", movie)
    let nominatedMoviesList = this.state.nominatedMovies
    // map through nominatedMovies list. if movie == nominatedMovie movie then remove it
    // return nominatedMoviesList.map(nominatedMovie => {
    //   if(nominatedMovie == movie){
    //     console.log("true")
    //   }
    // })

    for(let i=0; i < nominatedMoviesList.length; i++){
      if(nominatedMoviesList[i] == movie){
        // console.log(nominatedMoviesList[i])
        nominatedMoviesList.splice(i,1)
      } 
    }
    console.log("hopefully updated nominated Movie list: ", this.state.nominatedMovies)
  }

  // function removeItemAll(arr, value) {
  //   var i = 0;
  //   while (i < arr.length) {
  //     if (arr[i] === value) {
  //       arr.splice(i, 1);
  //     } else {
  //       ++i;
  //     }
  //   }
  //   return arr;
  // }


  render(){
    console.log("original nominated list? ", this.state.nominatedMovies);
    return (
      <div className="app">
        <Header/>
        <SearchArea movieInformation={this.movieInformation}/>
        <SearchResultList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie} />
        <Nominations nominatedMovie={this.state.nominatedMovies} removeNominatedMovie={this.removeNominatedMovie}/>
        
        {/* <SelectedMovieContent/> don't need this right now for the code challenge */}
      </div>
    )
  }
  
}


