import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Qimia
                  </p>
            </footer>
        )
    }
}
