import React, { Component } from 'react'
import ChildCom from './ChildCom';

//   method as props imp key 

 class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }
    
   greetparent(childName){
       alert(`hello ${this.state.message} from ${childName}`);
   }

    render() {
        return (
            <div>
                <ChildCom greetHandler={this.greetparent} />
            </div>
        )
    }
}

export default ParentCom
