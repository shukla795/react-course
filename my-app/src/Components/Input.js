// import React, { Component } from 'react'

//  class Input extends Component {
//      constructor(props) {
//          super(props)
//          this.inputRef = React.createRef()
//      }
     
//      focusInput(){
//          this.inputRef.current.focus();
//      }

//     render() {
//         return (
//             <div>
//                <input type="text" ref={this.inputRef} /> 
//             </div>
//         )
//     }
// }

import React from 'react'

 const Input = React.forwardRef((props , ref) => {
    return (
            <input type="text" ref={ref} />  
    )
})
 

export default Input
