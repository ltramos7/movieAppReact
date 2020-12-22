import React, { Component } from 'react'


export default class HeaderSection extends Component {
    render() {
        return (
            <section id="header-section">
                <div id="title">
                    <h3>Welcome To Movie Search!</h3>
                </div>
                <div id="nav-btns">
                    <form>
                        <button>Login</button>
                        <button>Signup</button>
                    </form>
                </div>
            </section>
        )
    }
}
