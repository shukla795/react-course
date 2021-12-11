import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
    }
    
    show(){
        alert(this.inputRef.current.value);
    }

    render(){
        return (
            <div>
               <input type="text" ref={this.inputRef} /> 
               <button onClick={() => this.show()} >Click Me</button>
            </div>
        )
    }
}

// after this we want focus provide with the help of parent component to the child componenet

export default RefsDemo

