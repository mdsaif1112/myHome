import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

import service1 from '@/assets/images/house.png'
import service2 from '@/assets/images/house-key.png'
import service3 from '@/assets/images/apartment.png'
import service4 from '@/assets/images/searching.png'

const Services = async () => {

    return (
        <section className='section secondary-bg'>
            <div className="my-container">
                <SectionTitle description={'Utilizing his exceptional experience and knowledge of the luxury waterfront markets, Roland serves an extensive and elite worldwide client base.'} heading={'Why Choose Us'} />

                <div className='grid grid-cols-1 xl:grid-cols-4 justify-between items-start mt-12'>
                    <ServiceCard icon={service1} title={'Sell your home'} desc={'We do a free evaluation to be sure you want to start selling.'} />
                    <ServiceCard icon={service2} title={'Rent your home'} desc={'We do a free evaluation to be sure you want to start selling.'} />
                    <ServiceCard icon={service3} title={'Buy a home'} desc={'We do a free evaluation to be sure you want to start selling.'} />
                    <ServiceCard icon={service4} title={'Buy a home'} desc={'We do a free evaluation to be sure you want to start selling.'} />
                </div>
            </div>
        </section>
    );
};

export default Services;