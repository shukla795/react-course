import React, { Component } from 'react'

 class HookCounterThree extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0,
              name:''
         }
     }

    //  in which write same piece of code two times in initial time run componentDidMount & rerender time componentDidUpdate
     componentDidMount(){
         document.title = `you click ${this.state.count}`
     }
     componentDidUpdate(prevprops , prevstate){
         if(prevstate.count != this.state.count){
             console.log("upldating...")
             document.title = `you click ${this.state.count}`
         }
     }
     
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>this.setState({name :e.target.value})} />
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment Count {this.state.count}</button>
            </div>
        )
    }
}

export default HookCounterThree
