import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ icon, desc, title }) => {

    return (
        <div className='service-card p-8 hover:bg-white duration-200 cursor-pointer'>
            <Image src={icon.src} alt='' width={42} height={42} />
            <h4 className='text-xl font-semibold my-3'>{title}</h4>
            <p className='text-sm text-[#5c727d]'>{desc}</p>
        </div>
    );
};

export default ServiceCard;