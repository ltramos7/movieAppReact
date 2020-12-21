import React, { Component } from 'react'
import MatchingMovie from '../matchingMovie/matchingMovie'

export default class searchResultList extends Component {
    render() {
        return (
            <section id="search-results-list">
                <p> searchResultList</p>
                <MatchingMovie/>
            </section>
        )
    }
}


