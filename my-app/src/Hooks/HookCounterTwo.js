import React ,{useState} from 'react'

function HookCounterTwo() {
    // usesState with Object
//  const [Name,setName]  = useState({firstName:'' , lastName:''})

    // useState with an array
    const [items,setitems] = useState([]);
   
    const additem = () => {
      setitems([...items , 
          {  id:items.length,
             value:Math.floor(Math.random()*10)+1
            }])        
    }

    return (
        // <div>
        //     {/* use state does not automatically merge the property thats why we are using here spread operator this behabve first merge before update */}
        //     <input type="text" value={Name.firstName} onChange={e => setName({ ...Name,firstName: e.target.value})} />
        //     <input type="text" value={Name.lastName} onChange={e => setName({ ...Name,lastName: e.target.value})} />
        //     <h1>firstName:{Name.firstName}</h1>
        //     <h1>lastName:{Name.lastName}</h1>
        // </div>
  
        <>
         <button onClick={additem} >Add items</button>
         {
             items.map(item => <li key={item.id} >
                 {item.value}
             </li>)
         }
        </>
    )
}

export default HookCounterTwo
