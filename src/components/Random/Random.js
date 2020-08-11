import React from 'react';
import './Random.css';

const Random = ({min, max}) => {

    const result = (Math.random()*Number(max)-1)+Number(min)
    
    return (
        <div className="random">Random Value Between {min} and {max} &gt; {result}</div>
    )
}

export default Random;