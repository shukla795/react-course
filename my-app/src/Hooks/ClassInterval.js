import React, { Component } from 'react'

 class ClassInterval extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     
    componentDidMount(){
        // automatically increment count use of setInterval
      this.Interval = setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.Interval)
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>                
            </div>
        )
    }
}

export default ClassInterval
