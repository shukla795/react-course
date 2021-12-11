import React , {Component} from 'react';

 
//  Destructuring(unboxing) with props
//    only in render method we can do this 
    // const {name , lname} = this.props
//   in h1 {name} {lname}

class Welcome extends Component {
    
    clickHandler() {
     console.log('click');
    }
    
    render (props){
        <button onClick={this.clickHandler} >Click me</button>
       return  <h1> {this.props.name} with Class Componenets</h1>;
    }
}

export default Welcome;