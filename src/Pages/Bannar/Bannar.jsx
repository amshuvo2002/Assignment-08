import React from 'react';
import Playstore from '../../assets/icons8-google-play-store-48.png'
import Appstore from '../../assets/icons8-app-store-48.png'
import BannarBG from '../../assets/hero.png'

const Bannar = () => {
    return (
    <div>
        <div  className='flex justify-center md:px-20 md:pt-20 pt-5 px-5'>
         <div className=''>
            <div className='text-center'>
                <h1 className='md:text-7xl text-4xl font-bold text-[#001931]'>We Build<span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps</h1>
                <p className='text-[#627382] md:text-2xl mt-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
             <div className='flex justify-center gap-4 mt-5'>
                <div>
                    <button className="btn btn-outline p-4 border-[#D2D2D2]"><img className='w-[30px]' src={Playstore} alt="" />Google Play</button>
                </div>
                <div>
                   <button className="btn btn-outline p-4 border-[#D2D2D2]"> <img className='w-[30px]' src={Appstore} alt="" />App Store</button>
                </div>
             </div>
             <div className='mt-5'>
                <img className='md:w-2/3 mx-auto' src={BannarBG} alt="" />
             </div>
        </div>
       </div>

       <div className='md:h-[350px] h-[210px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white p-5 md:p-20'>


              <h1 className='md:text-4xl text-2xl font-bold text-center mb-4 md:mb-10'>Trusted by Millions, Built for You</h1>
        

            <div className='flex justify-center'>
                <div className='flex justify-between md:gap-20'>
                    <div className='text-center'>
                        <p className='text-gray-200' >Total Downloads</p>
                        <h1 className='font-bold md:text-6xl text-2xl'>29.6M</h1>
                        <p className='text-gray-200'>21% more than last month</p>
                    </div>
                    <div  className='text-center'>
                        <p className='text-gray-200'>Total Reviews</p>
                        <h1  className='font-bold md:text-6xl text-2xl'>906K</h1>
                        <p className='text-gray-200'>46% more than last month</p>
                    </div>
                    <div  className='text-center'>
                        <p className='text-gray-200'>Active Apps</p>
                        <h1  className='font-bold md:text-6xl text-2xl'>132+</h1>
                        <p className='text-gray-200'>31 more will Launch</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
    );
};

export default Bannar;