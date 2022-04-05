import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const firstReviews = reviews.slice(0, 3);
    return (
        <div className='container'>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 m-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-5xl'>Welcome to <span className='text-orange-500'>Tech Zone BD</span></h1>
                        <p className='text-xl text-left mt-6'>THERE'S NO SHORTAGE of products that are hailed
                            by their creators as "revolutionary" or "totally transformative"
                            upon launch. Sure, every company that births a new gadget into the
                            world wants to believe that its innovative design and fancy new
                            manufacturing process is going to profoundly change the way we
                            experience technology in the future. But of course they think
                            this way—it sometimes actually happens.</p>
                        <div className='flex justify-start my-5'>
                            <button className='text-lg bg-orange-500 text-white font-semibold px-4 py-2 rounded'>Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="image/watch.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl my-6'>Customer Reviews</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                    {
                        firstReviews.map(fr => <div key={fr.id} className='mb-6 p-5 bg-orange-100 rounded'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={fr.img} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{fr.name}</h1>
                                <p>Review: "{fr.comment}"</p>
                                <p><small>Ratings: {fr.rating}/5</small></p>
                            </div>
                        </div>)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='text-lg bg-orange-500 text-white font-semibold px-4 py-2 rounded'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;