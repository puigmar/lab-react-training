import React from 'react';
import './IdCard.css';

const IdCard = ({
    firstName,
    lastName,
    gender,
    height,
    birth,
    picture
}) => {
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const heightConversion = `${height/100}m`
    const birthConversion = `${days[birth.getDay()]} ${months[birth.getMonth()]} ${birth.getDate()} ${birth.getFullYear()}`;

    return (
        <div className="card">
            <div className="card_img">
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="card_content">
                <dl>
                    <dt>FirstName:</dt>
                    <dd>{firstName}</dd>
                </dl>
                <dl>
                    <dt>LastName:</dt>
                    <dd>{lastName}</dd>
                </dl>
                <dl>
                    <dt>Gender:</dt>
                    <dd>{gender}</dd>
                </dl>
                <dl>
                    <dt>Height:</dt>
                    <dd>{heightConversion}</dd>
                </dl>
                <dl>
                    <dt>Birth:</dt>
                    <dd>{birthConversion}</dd>
                </dl>
            </div>
        </div>
    )
}

export default IdCard;
