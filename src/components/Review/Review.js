import React from 'react';
import './Review.css'

const review = (props) => {
    const { name, comment, rating, img } = props.review;
    return (
        <div className='mb-6 p-5 bg-orange-100 rounded'>
            <div className='flex justify-center'>
                <img className='w-20' src={img} alt="" />
            </div>
            <div>
                <h1 className='font-semibold'>{name}</h1>
                <p>Review: "{comment}"</p>
                <p><small>Ratings: {rating}/5</small></p>
            </div>
        </div>
    );
};

export default review;