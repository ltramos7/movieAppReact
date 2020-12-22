import React, { Component } from 'react'
import MatchingMovie from '../matchingMovie/matchingMovie'

export default class searchResultList extends Component {
    
    
    // get id="search-results-list"

    renderMovieInformation = () => {
        // console.log(matchingMoviesData.Search)
        // const matchingMovies = matchingMoviesData.Search
        const matchingMovies = this.props.matchingMovies
        return matchingMovies.map( movie => {
            return(
                <div>
                    <p>Title: {movie.Title}</p>
                    <p>Year: {movie.Year}</p>
                </div>
            )    
        })
    }
   

    render() {
        console.log(this.props.matchingMovies)
        return (

            <section id="search-results-list">
                <p> searchResultList</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                {this.renderMovieInformation()}

                <MatchingMovie/>
            </section>
        )
    }
}


