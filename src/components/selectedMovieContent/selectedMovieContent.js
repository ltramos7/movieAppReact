import React, { Component } from 'react'

export default class selectedMovieContent extends Component {
    render() {
        return (
            <section id="selected-movie-content-area">
                <div id="movie-content">
                    <h3>Title</h3>
                    <h3>Release Year</h3>
                    <button>Nominate</button> 
                    {/* think about a boolean nominated:true or nominated:false, to disable the nominate button */}
                </div>
            </section>
        )
    }
}
