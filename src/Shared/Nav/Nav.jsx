import { Link, NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';

const Nav = () => {
  const navLinks = (
    <>
      <li className="font-semibold text-xl btn bg-transparent hover:bg-transparent outline-none border-none shadow-none">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className="font-semibold text-xl btn bg-transparent hover:bg-transparent outline-none border-none shadow-none">
        <NavLink to={'/profile'}>Update Profile</NavLink>
      </li>
      <li className="font-semibold text-xl btn bg-transparent hover:bg-transparent outline-none border-none shadow-none">
        <NavLink to={'/about'}>About Us</NavLink>
      </li>
      <li className="font-semibold text-xl btn bg-transparent hover:bg-transparent outline-none border-none shadow-none">
        <NavLink to={'/contact'}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div data-aos="fade-down" className="navbar container mx-auto">
        <div className="navbar-start my-5">
          <details className="dropdown">
            <summary className=" btn bg-transparent border-none shadow-none w-auto h-auto p-0 m-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </details>
          <Link
            to={'/'}
            className="btn btn-ghost text-xl hover:bg-transparent text-[#F85359]"
          >
            <span className="text-black">Prime</span> Palace
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-2 text-[18px] menu-horizontal items-center">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={'/login'}
            className="btn glass bg-[#F85359]/[.01] text-white text-[18px]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
