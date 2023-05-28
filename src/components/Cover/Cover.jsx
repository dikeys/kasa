import React from 'react';

const Cover = ({img}) => {
    return (
        <div className='cover'>
            <img className='cover__img' src={img} alt="cover house" />
        </div>
    );
};

export default Cover;