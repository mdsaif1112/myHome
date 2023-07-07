"use client";

import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/providers/AuthProvider';
import { LoginContext } from '@/providers/LoginProvider';
import useUserType from '@/utilities/hooks/useUserType';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const AdminDashboard = () => {

    const { userType, isLoading } = useUserType();
    const { user, loading } = useContext(AuthContext)
    const router = useRouter();
    const { setOpen } = useContext(LoginContext)



    if (loading) {
        return <Loader />;
    }

    if (!user) {
        setOpen(true)
        return router.push("/");
    }

    if (isLoading || (userType === '')) {
        return <Loader />;
    }

    if ((userType !== "admin") && (userType !== '')) {

        return router.push("/");
    }


    if (userType === 'admin') {
        return (
            <div className='h-[500px]'>
                Admin
            </div>
        );
    }
};

export default AdminDashboard;