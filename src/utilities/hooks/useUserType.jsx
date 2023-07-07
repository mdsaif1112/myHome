"use client"

import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';

const useUserType = () => {

    const { user } = useContext(AuthContext)

    const email = user?.email

    const { data: userType = '', isLoading, refetch } = useQuery({
        queryKey: ['userType', email],
        queryFn: async () => {
            if (email) {
                const res = await axios('api/users', {
                    params: { email: email }
                })

                return res?.data?.userType
            }
        }
    })

    return { userType, isLoading, refetch }
};

export default useUserType;