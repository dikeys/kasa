import React from 'react';
import styled from 'styled-components';
import background from '../../assets/img/Background.png'



const BgImg = styled.div
`
background : center / cover no-repeat url(${({url})=> url}), center / cover no-repeat url(${background});
`
const Banner = ({url, text}) => {

    return (
        <div className='banner'>
           <BgImg url={url} className='banner__bg'>
            <span className='banner__heading'>{text ? text : "" }</span>
           </BgImg>
          
        </div>
    );
};

export default Banner;