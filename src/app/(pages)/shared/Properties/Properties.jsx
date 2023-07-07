"use client"

import Loader from '@/components/Loader/Loader';
import SingleProperty from '@/components/SingleProperty/SingleProperty';
import useProperties from '@/utilities/hooks/useProperties';
import React, { useState } from 'react';

const Properties = () => {

    const [page, setPage] = useState(1)

    const { properties, isLoading } = useProperties(page)

    return (
        <section className='section'>
            <div className="my-container">
                {
                    (isLoading) ?
                        <Loader />
                        :
                        <>
                            <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-20'>
                                {
                                    properties?.map(property => <SingleProperty key={property._id} property={property} />)
                                }
                            </div>

                            {/* <div className='mt-10 flex justify-center'>
                                <button onClick={() => setPage(page + 1)} className="primary-btn">
                                    Load More
                                </button>
                            </div> */}
                        </>
                }

            </div>
        </section>
    );
};

export default Properties;