"use client"

import Loader from '@/components/Loader/Loader';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SingleProperty from '@/components/SingleProperty/SingleProperty';
import useFavorites from '@/utilities/hooks/useFavorites';
import React from 'react';

const Favorites = () => {


    const { myFavorites } = useFavorites()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle
                    description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Favorite Properties'} />

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
    );
};

export default Favorites;