import React, { Component } from 'react'

export default class movieCard extends Component {
    // when button in clicked, setState 

    setNominatedMoive = () => {
        console.log("Nominate button clicked")
    }

    // setNominatedMoive = () => {
    //     this.setState = ({
    //         nominatedMovie : to the whole movie object
    //     }) 
    // }

    render() {
        return (
            <div className="movie-card">
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <button onClick={this.setNominatedMoive}>Nominate</button>
            </div>
        )
    }
}


