import axios from 'axios'
import React, { Component } from 'react'

 class Dataget extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[]
         }
     }

     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        //    console.log(res)
            this.setState({posts:res.data})
         }).catch((err)=>{
             console.log("something went wrong")
         })
     }
     
    render() {
        return (
            <div>
               <h1>List of post</h1>
               {
                   this.state.posts.map(post=>(<li key={post.id} > {post.title} </li>))
               }
            </div>
        )
    }
}

export default Dataget
