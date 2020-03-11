/***
 * 
 * An example of the useState from Hooks Api in React
 */

import React, { useState, useEffect } from 'react';

const CountingButton = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Update the document title with number of counts
        document.title = `Button Clicked ${count} times`;
      })

    return (
        <div>
            <p> Counter Button : {count}</p>
            <button onClick={
                ()=> setCount(count + 1)
            }> Add 1 </button>
        </div>
    )
}
