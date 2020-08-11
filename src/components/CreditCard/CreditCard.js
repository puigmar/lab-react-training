import React from 'react';
import './CreditCard.css';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const styleInline={
        backgroundColor: bgColor,
        color: color
    }

    const NUMS_HIDDEN = 12;
    let numberDots = [];
    let numberBlock = '';

    (''+number).split('').forEach( (num, i) => {
        if (i < NUMS_HIDDEN) {
            if(i > 1 && (i+1)%4 === 0 ){
                numberBlock += num.replace(num,'●')
                numberDots.push(numberBlock);
                numberBlock = '';
            } else {
                numberBlock += num.replace(num,'●')
                console.log(numberBlock)
            }
        }
    })

    let hiddenNumbers= '';
    numberDots.forEach(block => hiddenNumbers += `${block}\x20\x20`)
    let visibleNumbers = (''+number).split('').splice(NUMS_HIDDEN, number.length).join('');

    const cardType = type.split(' ').join('').toLowerCase();


    return (
        <div className={'credit-card '+cardType} style={styleInline}>
            <div className="card-nums">{hiddenNumbers}<span>{visibleNumbers}</span></div>
            <div className="card-details">
                <div className="card-details_top">
                    <div className="card-details_expires">Expires {expirationMonth}{expirationYear}</div>
                    <div className="card-details_bankName">{bank}</div>
                </div>
                <p className="card-details_owner">{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;