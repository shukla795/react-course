import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'harshit'
         }
         console.log("constructorA");
     }

     static getDerivedStateFromProps(props , state){
         console.log("getDerivedStateFromPropsA")
         return null;
     }

    //  shouldComponentUpdate(){
    //      console.log("shouldcOmponentUpdateA");
    //      return true;
    //  }

    //  getSnapshotBeforeUpdate(prevProps , prevSate){
    //     console.log("getSnapshotBeforeUpdateA");
    //     return null;
    //  }

    //  componentDidUpdate(){
    //      console.log("componentDidUpdateA");
    //  }
       
     componentDidMount(){
         console.log("componentDidMountA");
     }
    
    changeState(){
        this.setState({
            name:'shukla'
        })
    }

    render() {
        console.log("Inside renderA");
        return (
            <div>
              hello
              <button onClick={() => this.changeState() } >change State</button>
             <LifeCycleB />   
            </div>
        )
    }
}

export default LifeCycleA
