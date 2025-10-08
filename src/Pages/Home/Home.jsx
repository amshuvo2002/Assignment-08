import React from 'react';
import Bannar from '../Bannar/Bannar';
import { useLoaderData } from 'react-router';
import BanarApp from '../Banar-App/BanarApp';



const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className='bg-gray-100'>
            <Bannar></Bannar>
         <div  className='text-center p-10'>
            <h1 className='text-4xl font-bold text-[#001931]'>Trending Apps</h1>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
         </div>
            {
                data.map((singleApp)=><BanarApp key={singleApp.id} singleApp={singleApp}></BanarApp>)
            }
        </div>
    );
};

export default Home;