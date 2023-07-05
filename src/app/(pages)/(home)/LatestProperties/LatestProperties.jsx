"use client"

import Loader from '@/components/Loader/Loader';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SingleProperty from '@/components/SingleProperty/SingleProperty';
import useLatestProperties from '@/utilities/hooks/useLatestProperties';
import axios from 'axios';
import React from 'react';


// export const getProperties = async () => {
//     const res = await axios('http://localhost:3000/api/latestProperties')
//     return res.data
// }

const LatestProperties = async () => {

    // const { properties, refetch } = useLatestProperties()

    // const properties = await getProperties()

    const properties = []

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties'} />

                {
                    properties.length === 0 ?
                        <Loader />
                        :
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                            {
                                properties?.map(property => <SingleProperty key={property._id} property={property} />)
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default LatestProperties;