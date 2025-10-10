
import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <PuffLoader color="#00D390" size={80} />
        </div>
    );
};

export default LoadingSpinner;
