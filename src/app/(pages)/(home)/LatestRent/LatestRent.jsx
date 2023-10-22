"use client"

import Loader from '@/components/Loader/Loader';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PropertyCard from '@/components/PropertyCard/PropertyCard';
import useLatestProperties from '@/utilities/hooks/useLatestProperties';
import React from 'react';
import './LatestRent.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useLatestRents from '@/utilities/hooks/useLatestRents';

const LatestRent = () => {
    const { rents, refetch } = useLatestRents()

    // console.log(rents);

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties for Rent'} />

                {
                    rents.length === 0 ?
                        <Loader />
                        :
                        <div className='my-container mt-8'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={0}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    rents?.map(rent => <SwiperSlide key={rent._id}>
                                        <div className='py-10 px-5'>
                                            <PropertyCard property={rent} />
                                        </div>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                }
            </div>
        </section>
    )
};

export default LatestRent;