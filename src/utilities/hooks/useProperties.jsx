"use client"

import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useProperties = () => {

    const { data: properties = [], isLoading, refetch } = useQuery(
        {
            queryKey: 'properties',
            queryFn: async () => {
                const res = await axios('api/properties')
                return res.data
            }
        }
    )

    return { properties, isLoading, refetch }
};

export default useProperties;