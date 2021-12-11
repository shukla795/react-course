import React from 'react'

function Person({person}) {
    // console.log(props)
    return (
        <div>
        <h2>
           Hello {person.name} you know my {person.lname}
        </h2>
        </div>
    )
}

export default Person
