import React, { Component } from 'react'

export default class nominations extends Component {

    
    renderNominatedMovies = () => {
        let nominatedMovies = this.props.nominatedMovie
        return nominatedMovies.map(movie => {
            return <p key={movie.imdbID}>{movie.Title} ({movie.Year})</p>
        }) 

    }

    render() {
        return (
            <section id="nominated-movie-container">
                <h1>Nominated Movies</h1>
                {this.renderNominatedMovies()}
            </section>
        )
    }
}
