import React, { Component } from 'react'

 class RegularComp extends Component {
    render(props) {
        console.log("regular render")
        return (
            <div>
              Regular Component  {this.props.name}
            </div>
        )
    }
}

export default RegularComp
