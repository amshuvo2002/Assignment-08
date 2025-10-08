import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import Footer from '../../Component/Footer/Footer';
import ErrorImg from '../../assets/error-404.png'

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-10 flex justify-center bg-gray-100'>
               <div className='text-center'>
                   <img className='w-2/3 mx-auto' src={ErrorImg} alt="" />
                   <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
                   <p className='text-[#627382]'>The page you are looking for is not available.</p>
                   <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-2">Go Back!</button>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;