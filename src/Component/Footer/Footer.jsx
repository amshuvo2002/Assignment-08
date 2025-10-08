import React from 'react';
import Logo from '../../assets/logo.png'
import FB from '../../assets/icons8-facebook-50.png'
import x from '../../assets/icons8-x-50.png'
import link from '../../assets/icons8-linkedin-50.png'

const Footer = () => {
    return (
        <div className='bg-black p-10'>
            <div className=' h-[100px] '>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[40px]' src={Logo} alt="" />
                        <p className='text-white'>HERO.IO</p>
                    </div>
                    <div>
                        <p className='text-white'>Social Links</p>
                        <div className='flex gap-3 mt-2'>
                           <img className='w-[30px] invert' src={FB} alt="" />
                           <img className='w-[30px] invert' src={x} alt="" />
                           <img className='w-[30px] invert' src={link} alt="" />
                        </div>
                    </div>
                </div>
               
            </div>

            <div className='border-[0.5px] border-gray-400'></div>

             <div className='text-center mt-4'><p className='text-gray-300'>Copyright © 2025 - All right reserved</p></div>
        </div>
    );
};

export default Footer;