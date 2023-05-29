import React from 'react';

const Picture = ({img}) => {
    return (
        <div className='picture'>
            <img className='picture__img' src={img} alt="user profile"  />
        </div>
    );
};

export default Picture;