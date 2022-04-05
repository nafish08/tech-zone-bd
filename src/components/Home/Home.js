import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className=' grid grid-cols-2 m-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-5xl'>Welcome to <span className='text-orange-500'>Tech Junkies BD</span></h1>
                        <p className='text-xl text-left mt-6'>THERE'S NO SHORTAGE of products that are hailed
                            by their creators as "revolutionary" or "totally transformative"
                            upon launch. Sure, every company that births a new gadget into the
                            world wants to believe that its innovative design and fancy new
                            manufacturing process is going to profoundly change the way we
                            experience technology in the future. But of course they think
                            this way—it sometimes actually happens.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="image/watch.jpg" alt="" />
                </div>
            </div>
            <div className='text-4xl'>
                <h1>Customer Reviews</h1>
                <div>

                </div>
                <button className='text-lg bg-orange-500 text-white font-semibold px-4 py-2 rounded'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;