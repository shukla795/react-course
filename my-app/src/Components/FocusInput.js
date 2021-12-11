import React, { Component } from 'react'
import Input from './Input'
 class FocusInput extends Component {
     constructor(props) {
         super(props)
         this.componentRef = React.createRef()
     }
     
    // showfocus(){
        //    this method is for to pass the refs parent to child & focus by parent
    //     this.componentRef.current.focusInput()
    // }
    showfocus(){
        this.componentRef.current.focus()
        // providing forwarding ref is a technique to pass the automatically refs into to child components
    }

    render() {
        return (
            <div>
             <Input ref={this.componentRef} />   
             <button onClick={() => this.showfocus()} >focus Input</button>          
            </div>
        )
    }
}

export default FocusInput
