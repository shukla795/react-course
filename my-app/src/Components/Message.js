import React , {Component} from 'react';


class Message extends Component {
    constructor(){
        super();
        this.state = {
            message:'welcome Vistors'
        }
    //    constructor mai bind
     // 3-  this.changeMessage = this.changeMessage.bind(this)
    }

 changeMessage() {
     this.setState( {
         message:'Thankyou for Subscribe'
     })
 }

//   changeMessage = () => {

//   }

    render (){
       return (
         <div>  
        <h1>{this.state.message} </h1>
     
      {/* Event binding have four approach to solve problem.. 
      the problem is this value has undefined */}

    {/* 1-    {/* <button onClick={() => this.changeMessage()}>subscribe</button> */}
     {/* 2-    <button onClick={this.changeMessage.bind(this)}>subscribe</button>  */}
    {/* 3-    <button onClick={this.changeMessage}>subscribe</button>  */}
         </div>
       ) 
    }
}

export default Message;