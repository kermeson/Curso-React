import React, { Component } from 'react'

export default class extends Component {
    render() {
        if (this.props.test) {
            return this.props.children
        } else {
            return null
        }
    }
}