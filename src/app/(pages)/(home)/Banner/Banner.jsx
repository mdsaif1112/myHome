"use client"

import React from 'react';
import bannerBg from '@/assets/images/wpresidece-header.jpg'
import Login from '../../(login)/Login';
import Register from '../../(register)/Register';

const Banner = async () => {

    return (
        <section style={{ backgroundImage: `url(${bannerBg.src})` }} className='w-full h-[500px] xl:h-[700px] bg-center'>
            <div className='w-full h-full bg-gradient-to-b from-[#053a63b8] to-[#01111Bb8]' >
                <div className='my-container flex justify-start xl:justify-center items-center flex-col h-full pt-16 xl:pt-0'>
                    <h1 className='text-[30px] xl:text-[50px] font-semibold text-white mb-5 px-14 xl:px-0 text-center'>
                        Find Your Dream Home
                    </h1>
                    <p className='text-white text-[17] p-0 px-5 xl:px-60 text-center'>
                        We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.
                    </p>
                </div>
            </div>
            <Login />
        </section>
    );
};

export default Banner;