"use client"

import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

// TODO: Limit Should be dynamic
const useProperties = (page, limit = 9) => {

    const { data: properties = [], isLoading, refetch } = useQuery(
        {
            queryKey: ['properties', page, limit],
            queryFn: async () => {
                const res = await axios('api/properties', {
                    params: { page: page, limit: limit }
                })
                return res.data
            }
        }
    )

    return { properties, isLoading, refetch }
};

export default useProperties;