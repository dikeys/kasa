import React from 'react';






const Banner = ({classBg, text }) => {
    return (
        <div className='banner'>
            <div className={classBg}>
                <span className='banner__heading'>{text ? text : ""}</span>
            </div>
        </div>
    );
};

export default Banner;