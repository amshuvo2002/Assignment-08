import React from 'react';
import Bannar from '../Bannar/Bannar';
import { Link, useLoaderData } from 'react-router';
import BanarApp from '../Banar-App/BanarApp';
import Allapps from '../All-Apps/Allapps';



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
          <div className='md:grid grid-cols-4 gap-10 p-10 mx-auto'>
              {
                data.map((singleApp)=><BanarApp key={singleApp.id} singleApp={singleApp}></BanarApp>)
            }
          </div>
          <Link to={'/Apps'}><div className='text-center pb-10'> <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-2">Show All</button></div></Link>
        </div>
    );
};

export default Home;