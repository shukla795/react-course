import React from 'react'
import Person from './Person'
//  in map method we are using arrow function this method are use to traverse elements 

function NameList() {
    const names = ['harshit' , 'shukla' , 'rohit']
    const showList = names.map( (name,index) => <h1 key={index}>{index}{name}</h1>)
    //  here index work as unique key
    
    const persons = [
        {
            id:'1',
            name:'harshit',
            lname:'shukla'
        },
        {
            id:'2',
            name:'rohit',
            lname:'shukla'  
        }
    ]

    // const showdata = persons.map(person => <h2>
    //     Hello {person.name} you know my {person.lname}
    // </h2>)

    const showdata = persons.map(person => <Person key={person.id} person={person} />)
    // we can pass person data pass as props
   // const showdata = persons.map(person => <person person={person} />)
  //   in person.js mai {props.name} & {props.lname}

    return (
        <div>
            {showList}
        </div>
    )
}

export default NameList

