import React, { useEffect, useState } from "react";
import Star from '../../assets/icon-ratings.png'
import Download from '../../assets/icon-downloads.png'

const Allapps = () => {
    const [apps, setApps] = useState([]); // State declare

    useEffect(() => {
        fetch("/AllAppsData.json")
            .then((res) => res.json())
            .then((data) => setApps(data))

    }, []);

    return (
        <div className=" bg-gray-100">

            <div className="p-10">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#001931]">Our All Applications</h1>
                    <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="md:flex justify-between">
                    <h1 className="text-2xl font-bold text-[#001931] mb-6 md:mb-0">(132) Apps Found</h1>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className="md:grid grid-cols-4 gap-10 p-10 mx-auto">
                {apps.map((app) => (
                    <div className="card bg-base-100 md:w-75 mb-5 md:mb-0 shadow-sm pt-5">
                        <figure>
                            <img className='w-2/3'
                                src={app.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-[#010313]">
                                {app.title}
                            </h2>
                            <div className="card-actions justify-between items-end">
                                <div className='flex justify-between gap-2 p-2 rounded-sm text-[#00D390] bg-[#F1F5E8]'><img className='w-[20px]' src={Download} alt="" />{app.downloads}</div>
                                <div className='flex justify-between gap-2 p-2 rounded-sm text-[#FF8811] bg-[#FFF0E1]'><img className='w-[20px]' src={Star} alt="" />{app.ratingAvg}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Allapps;
