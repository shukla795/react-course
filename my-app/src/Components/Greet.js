import React from 'react';

// function Greet() {
//     return <h1>Harshit Shukla</h1>
// }


// we can't chanage the values of props . props is immutable , that'why we are using state 

// Destructure(unboxing) with props--- 
//     first functional parameter in functional component...
//           In parameter we write
//           (name , lname)
    //       now write inside h1
    //       {name} {lname}
   
    // inside body
    //     const {name , lname} = props


const Greet = (props) => {
//    console.log(props);

    function clickHandler(params) {
        console.log("button click");
    }
    
   return (
       <div>
        <h1> {props.name} with Functional Components a.s.n {props.lname}</h1>
        <button onClick={clickHandler} >Subscribe</button>
        {props.children}
        </div>
   )
    }

export default Greet;