import React from 'react'

function memocomp() {
    console.log("not rerender here because this follow memo functionality... if state & props not changed then that component will not reender ");
    return (
        <div>
            memoComponent
        </div>
    )
}

export default React.memo(memocomp)
