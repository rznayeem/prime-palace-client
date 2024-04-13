import { Link, NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);

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
          {user ? (
            <div className="flex items-center gap-6">
              <Link
                onClick={logOut}
                to={'/login'}
                className="btn bg-[#F85359] text-white text-[18px]"
              >
                Log Out
              </Link>
              <div className="dropdown dropdown-hover">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content -left-[70%] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to={'/login'}
              className="btn bg-[#F85359] text-white text-[18px]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
