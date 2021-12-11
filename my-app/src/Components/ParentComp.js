import React, { Component } from 'react'
import memocomp from './memocomp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Harshit'
         }
         console.log("constructor");
     }

     componentDidMount(){
         setInterval( () => {
             this.setState({
                 name :'Harshit'
             })
         } ,2000 )
         console.log("componentDidMount");
     }
     
    render() {
        console.log("inside render")
        return (
            <div>
                Parent Component {this.state.name}
                {/* <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                 <memocomp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
