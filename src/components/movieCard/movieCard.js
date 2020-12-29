import React, { Component } from 'react'

export default class movieCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
    }

    disableButton = () => {
        console.log("practice function reached")
        this.setState({
            disabled: true
        })
    }

    render() {
        return (
            <div className="movie-card">
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                {/* <button disabled={this.state.disabled} onClick={() => this.props.setNominatedMovie(this.props.movie)}>Nominate</button> */}
                <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(this.props.movie); this.disableButton();}}>Nominate</button>
            </div>
        )
    }
}






