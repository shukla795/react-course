import React ,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialstate = {
    loading: 'true',
    Error: '',
    posts: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            console.log('hello');
            return {
                loading: 'false',
                Error: '',
                posts: action.payload
            }
        case 'fail':
            return {
                loading: 'false',
                Error: '',
                posts: {}
            }
        default:
            return state;
    }
}

export default function DataFetching2() {
  const [state , dispatch] = useReducer(reducer , initialstate)
        
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
        // console.log(response.data)
     dispatch({type:'success' , payload:response.data})   
    }).catch((error)=>{
        // console.log('helo')
     dispatch({type:'fail'})
    })
  },[])

    return (
        <div>
          {state.loading?state.posts.title:'loading'}
          {state.error?state.error:null}
        </div>
    )
}
