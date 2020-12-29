import React, { Component } from 'react'

export default class movieCard extends Component {
    // when button in clicked, setState 

    // setNominatedMoive = () => {
    //     console.log("Nominate button clicked")
    //     console.log(this.props.movie.Title)
    //     console.log(this.props.movie.Year)
    // }

    // setNominatedMovie = () => {
    //     this.setState = ({
    //         nominatedMovie : {
    //             title: this.props.movie.Title,
    //             year: this.props.movie.Year
    //         }
    //     }) 
    //     console.log(this.props.nominatedMovie)
    // }

    // setNominatedMovie = () => {
    //     if (this.props.nominatedMovie != null){
    //         this.setState(prevState => ({
    //             nominatedMovie: {
    //                 ...prevState.nominatedMovie,
    //                 title: this.props.movie.Title,
    //                 year: this.props.movie.Year
    //             }
    //         }))
    //         debugger
    //     } else {
    //         console.log("not working")
    //     }
       
    // }
    


    //   this.setState(prevState => ({
//     jasper: {                   // object that we want to update
//         ...prevState.jasper,    // keep all other key-value pairs
//         name: 'something'       // update the value of specific key
//     }
// }))


render() {
    
    console.log("movieCard props: ", this.props);
        // debugger
        return (
            <div className="movie-card">
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <button onClick={() => this.props.setNominatedMovie(this.props.movie)}>Nominate</button>
            </div>
        )
    }
}






