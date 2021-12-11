import React ,{useState} from 'react'

//  const initialstate = {
//      fname:'harshit',
//      lname:'shukla'
//  }
 
 const initstate = ['harshit' , 'Shukla']

export const ObjectUseState = () => {
 
     const [person ,setPerson] = useState(initstate);
      
//    const  changeName = ()=>{
//        const newperson = {...person}

//          newperson.fname = "rohit"
//          newperson.lname = "shu"
//          setPerson(newperson)
//      }

     const changehandel = () =>{
        const newperson = [...person]

                 newperson.push("rohit")
                 newperson.push( "shu")
                 setPerson(newperson)
     }

    return (
        <div>
            {/* <button onClick={changeName} >{person.fname} {person.lname}</button>         */}
          {
           person.map(per=>(<button  onClick={changehandel} key={per} >{per}</button>))
          }
        </div>
    )
}
