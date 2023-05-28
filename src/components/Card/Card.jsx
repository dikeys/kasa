import React from 'react';
import styled from 'styled-components';

const DivBgImgCard = styled.div`
background : center / cover no-repeat url(${({img})=> img})
`
const Card = ({img,heading}) => {
    return (
        <DivBgImgCard  img={img} className='card'>
            <span className='card__heading'>{heading}</span>
        </DivBgImgCard>
    );
};

export default Card;