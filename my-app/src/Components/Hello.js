import React from 'react';


const Hello = () => {

    //  with JSX
    // return (
    //     <div className:'dummyClass'>
    //      <h1>Hello harshit</h1>
    //     </div>
    // )

    // without JSX
return React.createElement('div', {id:'hello' , className:'dummyClass'} ,
    React.createElement('h1' , null , 'hello harshit')
    );

}

// React.createElement(tag , optional properties , data);




export default Hello;