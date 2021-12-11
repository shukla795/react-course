import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverMouse extends Component {
    render() {
        const {count , increment , name} = this.props
        return (
            <div>
                <button onMouseOver={increment} >Mouse-hover {name} {count} times</button>
            </div>
        )
    }
}

export default  UpdatedComponent(HoverMouse,10)
