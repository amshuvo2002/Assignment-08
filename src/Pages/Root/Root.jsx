import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import Loader from '../../Component/Loader/Loader';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {
        navigation.state === 'loading'
          ? <Loader />
          : <Outlet />
      }
      <Footer />
    </div>
  );
};

export default Root;
