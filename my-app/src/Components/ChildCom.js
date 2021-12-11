import React from 'react'
import './mystyle.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function ChildCom(props) {
    return (
        <div>
            <h1 style={heading} >StyleSheet</h1>
            <h1 className='primary' >StyleSheets</h1>
            <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
        </div>
    )
}

export default ChildCom
