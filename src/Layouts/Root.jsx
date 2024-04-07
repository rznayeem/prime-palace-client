import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
  return (
    <div className="font-poppins">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
