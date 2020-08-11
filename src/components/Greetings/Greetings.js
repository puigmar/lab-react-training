import React from 'react';
import './Greetings.css';

const Greetings = ({lang, children}) => {

    let langStr = '';

    switch(lang){
        case 'de':
            langStr = 'Hallo';
            break;

        case 'fr':
            langStr = 'Bonjour';
            break;

        default:
            langStr = '';
            break;
    }
    
    return (
        <div className="greetings">{langStr} {children}</div>
    )
}

export default Greetings;