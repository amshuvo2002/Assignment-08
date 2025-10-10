import React from 'react';
import Spin from '../../assets/logo.png';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <img
                src={Spin}
                alt="Loading..."
                className="md:w-24 md:h-24 w-10 h-10 animate-spin"
            />
        </div>
    );
};

export default Loader;
