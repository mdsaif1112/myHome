import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <CircularProgress />
        </div>
    );
};

export default Loader;