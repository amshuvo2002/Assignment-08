import React from 'react';
import Logo from '../../assets/logo.png'
import Github from '../../assets/icons8-github-logo-30.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Apps'}>Apps</Link></li>
                            <li><Link to={'/Installation'}>Installation</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center gap-2">
                        <img className='w-[40px]' src={Logo} alt="Logo" /> HERO.IO
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Apps'}>Apps</Link></li>
                        <li><Link to={'/Installation'}>Installation</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <button onClick={() => window.open("https://github.com/amshuvo2002", "_blank")} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2">
                        <img className='w-[30px] invert' src={Github} alt="Github" /> Contribute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
