import React, { Component } from 'react'

export default class movieCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
    }

    disableButton = () => {
        // need conditional if nominated movies < 5 then set state
        // need to pass down the length/count through props. 
        // console.log("nominatedMoviesLenght: ", this.props.nominatedMoviesLength)
        if(this.props.nominatedMoviesLength < 5){
            this.setState({
                disabled: true
            })
        }   
    }

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






