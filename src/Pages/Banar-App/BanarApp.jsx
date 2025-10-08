import React from 'react';
import Star from '../../assets/icon-ratings.png'
import Download from '../../assets/icon-downloads.png'
const BanarApp = ({ singleApp }) => {


    return (
        <div>
            <div className="card bg-base-100 md:w-75 mb-5 md:mb-0 shadow-sm pt-5">
                <figure>
                    <img className='w-2/3'
                        src={singleApp.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#010313]">
                        {singleApp.title}
                    </h2>
                    <div className="card-actions justify-between items-end">
                       <div className='flex justify-between gap-2 p-2 rounded-sm text-[#00D390] bg-[#F1F5E8]'><img className='w-[20px]' src={Download} alt="" />{singleApp.downloads}</div>
                       <div className='flex justify-between gap-2 p-2 rounded-sm text-[#FF8811] bg-[#FFF0E1]'><img className='w-[20px]' src={Star} alt="" />{singleApp.ratingAvg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanarApp;