import React, { Component } from 'react'

export default class movieCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
    }

    disableButton = () => {
        if(this.props.nominatedMoviesLength < 5){
            this.setState({
                disabled: true
            })
        }   
    }

    activateNominateButton = (selectedMovie) => {
        console.log("trying to activate button.", selectedMovie)
        this.setState({
          disabled:false
        })
      }
    // maybe I check to see if the movie is still in the nominated list, if not make disabled to false

    render() {
        return (
            <div className="movie-card">
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(this.props.movie); this.disableButton();}}>Nominate</button>
            </div>
        )
    }
}






