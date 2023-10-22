"use client"

import Loader from '@/components/Loader/Loader';
import PropertyCard from '@/components/PropertyCard/PropertyCard';
import useFavorites from '@/utilities/hooks/useFavorites';
import React, { useContext } from 'react';
import Banner from '../../shared/Banner/Banner';
import { LoginContext } from '@/providers/LoginProvider';
import { AuthContext } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';

const Favorites = () => {


    const { myFavorites, isLoading } = useFavorites()

    const { user, loading } = useContext(AuthContext);

    const { setOpen } = useContext(LoginContext);

    const router = useRouter();

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        setOpen(true);

        router.push("/");
        return;
    }

    return (
        <>
            <Banner title={'Favorite Properties'} desc={'Allow users to save favorite properties with or without a registered account'} />
            <section className='section'>
                <div className="my-container">

                    {
                        myFavorites.length === 0 ?
                            <div className='text-center text-3xl'>Please add first</div>
                            :
                            <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                                {
                                    myFavorites?.map(property => <PropertyCard key={property._id} property={property} />)
                                }
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default Favorites;