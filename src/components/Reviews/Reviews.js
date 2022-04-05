import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className='text-3xl text-purple-900 uppercase mb-10'>Total Customer Reviews: {reviews.length}</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
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