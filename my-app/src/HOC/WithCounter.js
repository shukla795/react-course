import React, { Component } from 'react'

const UpdatedComponent = (OrigionalComponent,incrementnumber) => {
    
     class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count:0             
            }
        }
    
        increment = ()=> {
            // this.setState({count:this.state.count+1})
            this.setState((prevstate) =>
               ( {count:prevstate.count + incrementnumber}))
        }
        render() {
            return <OrigionalComponent count={this.state.count} increment={this.increment} name="harshit" {...this.props} />
        }
    }
    return NewComponent   
}

export default UpdatedComponent


// Syntax
// import React, { Component } from 'react'

// const UpdatedComponent = OrigionalComponent => {
    
//      class NewComponent extends Component {
//         render() {
//             return <OrigionalComponent />
//         }
//     }
//     return NewComponent   
// }

// export default UpdatedComponent