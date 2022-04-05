import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h2 className='text-3xl text-purple-900 uppercase mb-10'>About US</h2>
            <div className='bg-purple-100 w-96 mx-auto rounded p-10'>
                <div>
                    <img className='w-52 mx-auto pb-5' src="/image/man.png" alt="" />
                    <div>
                        <h1 className='font-semibold text-2xl'>Md. Nafish Sadik</h1>
                        <h2 className='text-sm'>Full-Stack Web Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;