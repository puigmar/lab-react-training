import React from 'react';
import './BoxColor.css';

const Random = ({r, g, b}) => {

    const rbgArr = [r, g, b]
    let hexaResult = '';
    let HexaLetters = ['a','b','c','d','e','f']

    rbgArr.forEach( color => {

        let firstLetter = Math.floor(color/16);
        let secondLetter = Math.floor(color%16);

        if (firstLetter < 10){
            hexaResult += firstLetter
        } else {
            hexaResult += HexaLetters[firstLetter-10]
        }

        if (secondLetter < 10){
            hexaResult += secondLetter
        } else {
            hexaResult += HexaLetters[secondLetter-10]
        }

    })

    const inlineStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        color: (g===0 && b===0) ? `#fff` : `#000`
    }
    
    return (
        <div style={inlineStyle} className="boxColor"><span>rgb({r},{g},{b})</span><span>#{hexaResult}</span></div>
    )
}

export default Random;