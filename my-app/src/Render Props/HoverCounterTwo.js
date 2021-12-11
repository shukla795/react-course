import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    render() {
        const {count , increment} = this.props 
        return (
            <button onMouseOver={increment} >Click {count} times</button>             
        )
    }
}

export default HoverCounterTwo
