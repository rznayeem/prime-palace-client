import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { useEffect } from 'react';
import 'animate.css';

import AOS from 'aos';

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-poppins">
      <div className="relative z-40">
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
