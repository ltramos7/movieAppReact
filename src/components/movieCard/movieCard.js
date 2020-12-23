import React, { Component } from 'react'

export default class movieCard extends Component {
    render() {
        return (
            <div>
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <p>I'm hoping this Movie Card Component works</p>
            </div>
        )
    }
}


