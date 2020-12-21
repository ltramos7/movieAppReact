import React, { Component } from 'react'

export default class searchArea extends Component {
    render() {
        return (
            <section id="search-area">
                <form>
                    <input placeholder="Search here..."></input>
                    <button>Search</button>
                </form>
            </section>
        )
    }
}
