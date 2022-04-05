import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>Total Customer Reviews: {reviews.length}</h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;