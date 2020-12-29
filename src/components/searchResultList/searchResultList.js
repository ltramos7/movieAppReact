import React, { Component } from 'react'
// import MatchingMovie from '../matchingMovie/matchingMovie'
import MovieCard from '../movieCard/movieCard'

export default class searchResultList extends Component {
    
    
    
    // get id="search-results-list"

    renderMovieInformation = () => {

        // debugger
        // console.log(matchingMoviesData.Search)
        // const matchingMovies = matchingMoviesData.Search
        const matchingMovies = this.props.matchingMovies
        return matchingMovies.map( movie => {
            return(
                <MovieCard key={movie.imdbID} movie={movie} setNominatedMovie={this.props.setNominatedMovie} disabled={this.props.disabled}/>
            )    
        })
    }
   

    render() {
        
        return (
            <section id="search-results-list">
                <h1> Search Results List</h1>
                {this.renderMovieInformation()}
            </section>
        )
    }
}


