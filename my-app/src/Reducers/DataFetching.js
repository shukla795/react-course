import axios from 'axios'
import React ,{useState ,useEffect} from 'react'

export default function DataFetching() {
    const [loading ,setLoading] = useState(true)
    const [error , setError] = useState('')
    const [posts , setPostS] = useState({})
  
     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
           setLoading(false);
           setError('');
           setPostS(response.data)
       }).catch((error)=>{
        setLoading(false);
        setError('something Went Wrong');
        setPostS({})
       })
     })

    return (
        <div>
            {loading?'Loading':posts.title}
            {error ? error:null}
        </div>
    )
}
