"use client"

import Loader from '@/components/Loader/Loader';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PropertyCard from '@/components/PropertyCard/PropertyCard';
import useLatestProperties from '@/utilities/hooks/useLatestProperties';
import React from 'react';

const LatestProperties = () => {

    const { latestProperties, refetch } = useLatestProperties()

    // console.log(latestProperties);

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties'} />

                {
                    latestProperties.length === 0 ?
                        <Loader />
                        :
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                            {
                                latestProperties?.map(property => <PropertyCard key={property._id} property={property} />)
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default LatestProperties;