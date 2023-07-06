import useProperties from '@/utilities/hooks/useProperties';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGoogle, FaLaptop, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const { properties } = useProperties()

    const categories = Array.from(new Set(properties?.map((property) => property.category)));

    console.log(categories);

    return (
        <footer className='bg-[#001a33] py-24'>
            <div className="my-container">
                <div className='grid grid-cols-3 justify-between items-start gap-8'>
                    <div>
                        <h3 className='text-white font-semibold'>Contact us</h3>
                        <div className='flex flex-col gap-5 mt-5'>
                            <span className='text-white flex justify-start items-start text-base gap-3'>
                                <FaMapMarkerAlt className='mt-1' /> 3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302
                            </span>
                            <span className='text-white flex justify-start items-start text-base gap-3'>
                                <FaPhone className='mt-1' /> +880 1562470000
                            </span>
                            <span className='text-white flex justify-start items-start text-base gap-3'>
                                <FaRegEnvelope className='mt-1' /> contact@gmail.com
                            </span>
                            <span className='text-white flex justify-start items-start text-base gap-3'>
                                <FaLaptop className='mt-1' /> <Link href={'/'}>My Home</Link>
                            </span>
                            <div className='flex gap-3'>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaLinkedinIn /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaTwitter /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaGoogle /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaFacebookF /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold'>Properties by Categories</h3>
                        <div className='mt-5'>
                            <ul className='text-white flex flex-col gap-3'>
                                {
                                    categories?.map((cat, idx) => <li key={idx}>
                                        {/* TODO: make links dynamic */}
                                        <Link href={'/'} className='capitalize hover:text-[#0073e1]'>
                                            {cat}
                                        </Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold'>Latest Properties</h3>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;