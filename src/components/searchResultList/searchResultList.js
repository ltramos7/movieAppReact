import React, { Component } from 'react'
import MatchingMovie from '../matchingMovie/matchingMovie'
import MovieCard from '../movieCard/movieCard'

export default class searchResultList extends Component {
    
    
    // get id="search-results-list"

    renderMovieInformation = () => {
        // console.log(matchingMoviesData.Search)
        // const matchingMovies = matchingMoviesData.Search
        const matchingMovies = this.props.matchingMovies
        return matchingMovies.map( movie => {
            return(
                <MovieCard key={movie.imdbID} movie={movie}/>
            )    
        })
    }
   

    render() {
        console.log(this.props.matchingMovies)
        return (

            <section id="search-results-list">
                <p> searchResultList</p>
              
                {this.renderMovieInformation()}

                <MatchingMovie/>
            </section>
        )
    }
}


