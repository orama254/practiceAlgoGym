/***
 * 
 * An example of the useState from Hooks Api in React
 */

import React, { useState } from 'react';

const CountingButton = () => {
    const [count, setCount] = useState(0)



    return (
        <div>
            <p> Counter Button : {count}</p>
            <button onClick={
                ()=> setCount(count + 1)
            }> Add 1 </button>
        </div>
    )
}
