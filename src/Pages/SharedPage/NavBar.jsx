import React, { useState,useEffect,useContext } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaSignInAlt } from "react-icons/fa";
import { MdSmartToy,MdLogout } from "react-icons/md";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';
import ImgTooltip from '../../Components/ImgTooltip';

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "All Toys", link: "/allToys" },
    { name: "Blogs", link: "/blog" },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='shadow-md w-full fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <Link to='/'>
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <p className='text-4xl text-slate-500 hover:text-accent transition duration-300'><MdSmartToy /></p>
            <img className='w-24' src="https://www.toysrus.com/on/demandware.static/Sites-ToysRUs-Site/-/default/dw471a30ce/images/TRU_Logo.png" alt="site logo" />
          </div>
        </Link>
        {/* Menu icon */}
        <div onClick={handleToggle} className='absolute right-8 top-6 active:text-error font-semibold cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <NavLink to={link.link} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>{link.name}</NavLink>
            </li>
          ))}
          {user && (
            <>
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <NavLink
                  to="/myToys"
                  className={`text-gray-800 hover:text-blue-400 duration-500 ${location.pathname === '/myToys' ? 'text-blue-400' : ''}`}
                >
                  My Toys
                </NavLink>
              </li>
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <NavLink
                  to="/addToys"
                  className={`text-gray-800 hover:text-blue-400 duration-500 ${location.pathname === '/addToys' ? 'text-blue-400' : ''}`}
                >
                  Add A Toy
                </NavLink>
              </li>
              <div className='flex gap-2 items-center md:ml-4 ml-0'>
              <button onClick={logOut} className="login-btn" >Log Out <MdLogout className='w-5 h-5 ml-2 -mr-1' /></button>
              <ImgTooltip/>
            </div>
            </>
          )}
          {!user && (
            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
              <NavLink
                to="/login"
                className={`text-gray-800 duration-500 ${location.pathname === '/login' ? 'login-active' : 'login-btn'}`}
              >
                Login <FaSignInAlt className='pl-2 text-2xl' />
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
