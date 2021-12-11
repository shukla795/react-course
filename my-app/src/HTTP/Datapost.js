import axios from 'axios'
import React, { Component } from 'react'

class Datapost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

     changeHandler=(e)=>{
       this.setState({ [e.target.name] : e.target.value})
    }
    
     submithandler=(e)=>{
        e.preventDefault();
         console.log(this.state)
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then((res)=>{
           console.log('Data saved' , res)
         }).catch((err)=>{
             console.log('data fail',err)
         })
     }

    
    render() {
        return (
            <>
                <form onSubmit={this.submithandler} >
                    <div>
                        <input type="text" name="UserId" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </>
        )
    }
}

export default Datapost
