import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
    render() {
        const {count , increment , name} = this.props
        return (
            <div>
                {this.props.hname}
                <button onClick={increment} >Click {name} {count} times</button>
            </div>
        )
    }
}

export default  UpdatedComponent( ClickCounter , 5 )
