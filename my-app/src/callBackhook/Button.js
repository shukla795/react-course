import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)
// react memo is use for performance optimization... if props & state does't change that time that component will not call...