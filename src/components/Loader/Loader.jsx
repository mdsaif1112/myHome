import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <div className="h-[500px] flex justify-center items-center mt-10">
            <div className='flex justify-center items-center my-20'>
                <CircularProgress />
            </div>
        </div>
    );
};

export default Loader;