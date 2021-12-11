import React from 'react'

function FragmentDemo() {
    const items =[]
    return (
        // <React.Fragment>
        //     <h1>Fragment</h1>
        //     <p>Fragment is a special feacture of reactjs we can return multiple values from React.Fragment without div.
                //   we can also write <> </> this way </p>
        // </React.Fragment>
      
       <React.Fragment>
           {
                 items.map(item => 
                    <React.Fragment key={item.id}>
                          <h1>{item.title}</h1>
                          <p>{item.paragrh}</p>
                    </React.Fragment>)
           }
            <td>Name</td>
            <td>Course</td>
       </React.Fragment> 
    )
}

export default FragmentDemo
