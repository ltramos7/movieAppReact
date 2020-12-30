import React, { Component } from 'react'

export default class nominations extends Component {

    
    renderNominatedMovies = () => {
        let nominatedMovies = this.props.nominatedMovie
        return nominatedMovies.map(movie => {
            return (
                <div>
                    <p key={movie.imdbID}>{movie.Title} ({movie.Year})</p>
                    <button>Remove</button>
                </div>
            )
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
