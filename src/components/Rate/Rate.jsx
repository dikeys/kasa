import React from 'react';

const Rate = ({ rating }) => {
    const maxRating = 5;
    const filledStars = Math.min(rating, maxRating);
  
    return (
      <div className='rate'>
        {[...Array(maxRating)].map((_, index) => (
          <span key={index} className={ `rate--size ${index < filledStars ? 'rate--pink' : 'rate--gray'}`} >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

export default Rate;