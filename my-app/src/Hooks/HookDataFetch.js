import React , {useState , useEffect} from 'react'
import axios from 'axios'

function HookDataFetch() {
    const [posts,setPosts] = useState([])
    const [id ,setId] = useState(1)
    const [value , setValue] = useState(1)

     useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${value}`).then((res)=>{
            console.log(res);
            setPosts(res.data)
         }).catch((err)=>{
             console.log("Something went wrong");
         })
     },[value])
     
     const getID = () => {
         setValue(id)
         console.log(value)
     }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={getID} >Show Data</button>
            <h2>{posts.title}</h2>
             {/* <ul>
            {    posts.map(post=> 
                 (<li key={post.id}>{post.title}</li>
                 )) }
              </ul> */}
        </div>
    )
}

export default HookDataFetch
