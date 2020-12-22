import React, { Component } from 'react'



// http://www.omdbapi.com/?apikey=acb05252&s=fast&furious
// http://www.omdbapi.com/?apikey=acb05252&s=whatever the search is
// appending the s= is what allows me to search for matching movies that are typed in

// get the matching movies
// put them into the array in the state of App component
// passed down the array of matching movies to searchResultList Componennt


export default class searchArea extends Component {

    setSearchValue = (e) => {
        // get the information and place it in the state
        // then have a fetch request use the url above to get the result
        e.preventDefault()
        this.setState({
            searchedMovie: e.target.value
        })
    

    }

    searchMovieFetch = (e) =>{
        e.preventDefault()
        console.log("search movie fetch function hit")
        // will want to add api key variable for protection reasons
        fetch(`http://www.omdbapi.com/?apikey=acb05252&s=${this.state.searchedMovie}`)
        .then(resp => resp.json() )
        // .then(matchingMovies => {console.log(matchingMovies)})
        .then(data => this.props.movieInformation(data))
        // i want to pass the matching movieMovies informatin to the searchResultList component. To do that, I need to pass the props back up to App component, then backdown to searchResultList component
    }

    // i think i want this function in searchResultList component
    // movieInformation = (matchingMoviesData) => {
    //     // console.log(matchingMoviesData.Search)
    //     const matchingMovies = matchingMoviesData.Search
    //     matchingMovies.forEach( movie => {
    //         console.log("Title: ", movie.Title, "Year: ", movie.Year)
    //     })
    // }



    render() {
        
        return (
            <section id="search-area">
                <form>
                    {/* is it better to use an onChange in the input element or an onClick on the button element? */}
                    <input placeholder="Search here..." onChange={this.setSearchValue}></input>
                    <button onClick={this.searchMovieFetch}>Search</button>
                </form>
            </section>
        )
    }
}
