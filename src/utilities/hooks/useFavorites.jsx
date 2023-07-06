"use client"

import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';

const useFavorites = () => {


    const { user } = useContext(AuthContext)

    const { data: myFavorites = [], isLoading, refetch } = useQuery({
        queryKey: ['myFavorites', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await axios(`api/favorites/${user?.email}`)
                return res.data
            }
        }
    })

    return { myFavorites, isLoading, refetch }
};

export default useFavorites;