import React, { Component } from 'react'

export default class movieCard extends Component {


    render() {
        return (
            <div className="movie-card">
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <button onClick={() => this.props.setNominatedMovie(this.props.movie)}>Nominate</button>
            </div>
        )
    }
}






