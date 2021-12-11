import React, { Component } from 'react'

 class ClassTimer extends Component {
    interval 
    constructor(props) {
         super(props)
     
         this.state = {
              timer:0
         }
     }
     componentDidMount(){
       this.interval  = setInterval(()=>{
         this.setState((prevState)=>({
             timer:prevState.timer+1
         }))
       },500)        
     }

     componentWillUnmount(){
         clearInterval(this.interval)
     }
     
    render() {
        return (
            <div>
              class Interval - {this.state.timer}
              <button onClick={()=>clearInterval(this.interval)} >clear interval</button>  
            </div>
        )
    }
}

export default ClassTimer
