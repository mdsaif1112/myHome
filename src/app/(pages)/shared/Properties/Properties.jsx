"use client"

import Loader from '@/components/Loader/Loader';
import SingleProperty from '@/components/SingleProperty/SingleProperty';
import useProperties from '@/utilities/hooks/useProperties';
import React from 'react';

const Properties = () => {

    const { properties } = useProperties()


    console.log(properties);

    return (
        <section className='section'>
            <div className="my-container">
                {
                    properties.length === 0 ?
                        <Loader />
                        :
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-20'>
                            {
                                properties?.map(property => <SingleProperty key={property._id} property={property} />)
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default Properties;