import React from 'react';

const Card = ({heading}) => {
    return (
        <div className='card'>
            <span className='card__heading'>{heading}</span>
        </div>
    );
};

export default Card;