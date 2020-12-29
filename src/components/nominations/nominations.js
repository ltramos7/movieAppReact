import React, { Component } from 'react'

export default class nominations extends Component {
    render() {
        console.log(this.props.nominatedMovie)
        return (
            <div>
                <h1>Nominated Movies</h1>
                <p>{this.props.nominatedMovie.Title} ({this.props.nominatedMovie.Year})</p>
            </div>
        )
    }
}
