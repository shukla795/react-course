import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'harshit'
         }
         console.log("constructorB");
     }

    //  static getDerivedStateFromProps(props , state){
    //      console.log("getDerivedStateFromPropsB")
    //      return null;
    //  }

    //  shouldComponentUpdate(){
    //     console.log("shouldcOmponentUpdateB");
    //     return true;
    // }

    // getSnapshotBeforeUpdate(prevProps , prevSate){
    //    console.log("getSnapshotBeforeUpdateB");
    //    return null;
    // }

    componentDidUpdate(){
        console.log("componentDidUpdateB");
    }

     componentDidMount(){
         console.log("componentDidMountB");
     }
     
    render() {
        console.log("Inside renderB");
        return (
            <div>
             hello   
            </div>
        )
    }
}

export default LifeCycleB
