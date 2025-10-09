import React from 'react';
// import { useEffect, useState } from "react";
import Star from '../../assets/icon-ratings.png'
import Download from '../../assets/icon-downloads.png'
import App from '../../assets/demo-app (1).webp'

const Installation = () => {
    // const [apps, setApps] = useState([]); // State declare

    // useEffect(() => {
    //     fetch("/AllAppsData.json")
    //         .then((res) => res.json())
    //         .then((data) => setApps(data))

    // }, []);
    return (
        <div className='bg-gray-100 pb-10'>
            <div className='text-center py-10 px-20'>
                <h1 className='text-4xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

                <div className='flex justify-between items-center mt-10'>
                    <div className='text-2xl font-bold text-[#001931]'>1 Apps Found</div>
                    <div >
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20'>
               
                   <div className='flex justify-between items-center bg-white p-5 rounded-xl '>
                        <div className='flex gap-5'>
                            <div>  <img className='w-[100px]' src={App} alt="" /></div>
                            <div className='' >
                                <h1 className='text-xl font-bold'>Forest: Focus for Productivity</h1>
                                <div className='flex justify-around mt-5'>
                                    <div className='flex justify-between gap-2 p-2 rounded-sm text-[#00D390] bg-[#F1F5E8]'><img className='w-[20px]' src={Download} alt="" />{}</div>
                                    <div className='flex justify-between gap-2 p-2 rounded-sm text-[#FF8811] bg-[#FFF0E1]'><img className='w-[20px]' src={Star} alt="" />{}</div>
                                    <div className='flex justify-center items-center'><p className='font-semibold text-gray-400'>450 MB</p></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-accent">Uninstall</button>
                        </div>
                    </div>
               
            </div>
        </div>
    );
};

export default Installation;