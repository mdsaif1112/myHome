"use client"

import Loader from '@/components/Loader/Loader';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SingleProperty from '@/components/SingleProperty/SingleProperty';
import useFavorites from '@/utilities/hooks/useFavorites';
import React from 'react';
import Banner from '../../shared/Banner/Banner';

const Favorites = () => {


    const { myFavorites } = useFavorites()

    return (
        <>
            <Banner title={'Favorite Properties'} desc={'Allow users to save favorite properties with or without a registered account'} />
            <section className='section'>
                <div className="my-container">

                    {
                        myFavorites.length === 0 ?
                            <Loader />
                            :
                            <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                                {
                                    myFavorites?.map(property => <SingleProperty key={property._id} property={property} />)
                                }
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default Favorites;