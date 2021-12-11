import React, { Component } from 'react'

class HookCounterFive extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

     logmouse = (e) => {
         this.setState({
            x:e.clientX,
            y:e.clientY 
         })
     }

    componentDidMount(){
        window.addEventListener('mousemove',this.logmouse)
    }
    // componentWillUnmount(){
    //     window.removeEventListener('mousemove' , this.logmouse)
    // }

    render() {
        return (
            <div>
                Hooks-- x-{this.state.x}
                        y-{this.state.y}
            </div>
        )
    }
}

export default HookCounterFive
