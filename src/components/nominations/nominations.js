import React, { Component } from 'react'

export default class nominations extends Component {

    activateNominateButton = (selectedMovie) => {
        // console.log(this.props.matchingMovies);
        this.props.matchingMovies.filter(movie => {
            if(movie == selectedMovie){
                console.log(movie)
            }
        })
    }
    
    // find the movie in the searchList and set the state of the button to whatever the opposite value it has...which is false?

    // activateNominateButton = (selectedMovie) => {
    //     console.log("trying to activate button.", selectedMovie)
    //     this.setState({
    //       disabled:false
    //     })
    //   }

    // removeNominatedMovie = (selectedMovie) => {
    //     this.setState({
    //     nominatedMovies: this.state.nominatedMovies.filter((movie)=>{
    //       return movie !== selectedMovie
    //     })
    //   })

    renderNominatedMovies = () => {
        let nominatedMovies = this.props.nominatedMovie
        return nominatedMovies.map(movie => {
            return (
                <div key={movie.imdbID}>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={() => {this.props.removeNominatedMovie(movie); this.activateNominateButton(movie)}}>Remove</button>
                    {/* onClick={() => {this.props.setNominatedMovie(this.props.movie); this.disableButton();}} */}
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
