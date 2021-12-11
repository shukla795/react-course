import  {useEffect} from 'react'

export default function useDocuement(count) {
     
    useEffect(()=>{
        document.title = `count-${count}`
    },[count])

}
