import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useLatestRents = () => {

    const { data: rents = [], isLoading, refetch } = useQuery({
        queryKey: ['rents'],
        queryFn: async () => {
            const res = await axios('api/latestRents')
            return res.data
        }
    })

    return { rents, isLoading, refetch }

};

export default useLatestRents;